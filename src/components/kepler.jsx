import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import keplerGlReducer from 'kepler.gl/reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { taskMiddleware } from 'react-palm/tasks';
import { Provider, useDispatch } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap } from 'kepler.gl/actions';
import AccordionForm from '../components/accordionForm';
import MultipleSelectChip from '../components/MultipleSelect';
import FormDialog from '../components/Dialog';
import { processGeojson } from 'kepler.gl/processors';
import { fetchDataFrame } from '../api';

// import data from '../data/dataset'
const customKeplerReducer = keplerGlReducer.initialState({
    uiState: {
        activeSidePanel: null,
        currentModal: null
    }
});

const reducer = combineReducers({
    keplerGl: customKeplerReducer,
});

const store = createStore(reducer, {}, applyMiddleware(taskMiddleware));

function Map() {

    const [fetchedDataFrame, setFetchedDataFrame] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedDataFrame(await fetchDataFrame())    
        }
        fetchApi();
    }, [setFetchedDataFrame])

    useEffect(() => {
        if (fetchedDataFrame) {
            console.log("resp", fetchedDataFrame)
            dispatch(
                addDataToMap({
                    datasets: {
                        info: {
                            label: 'crime',
                            id: 'crime-baltimore'
                        },
                        data: fetchedDataFrame
                    },
                    option: {
                        centerMap: true,
                        readOnly: false
                    },
                    config: {
                        visState: {
                            filters: [
                                // {
                                //     id: 'me',
                                //     dataId: 'test_trip_data',
                                //     name: 'tpep_pickup_datetime',
                                //     type: 'timeRange',
                                //     enlarged: true
                                // }
                            ]
                        }
                    }
                })
            )
        }
    }, [dispatch, fetchedDataFrame])



    return (
        <div>
            <KeplerGl
                id="1"
                mapboxApiAccessToken={"pk.eyJ1IjoiZGF2LW4iLCJhIjoiY2twYXV0aXloMGRxdzJwbzRoNjA1N2tyaiJ9.d_eAHzXAXQh1xj2qMgaWpA"}
                width={window.innerWidth}
                height={window.innerHeight}
                appName={'Data Science Corps'}
            />
        </div>
    )
}

export default function kepler() {

    // const [startDate, setStartDate] = useState('');
    // const [endDate, setEndDate] = useState('');
    // const [crimeDescription, setCrimeDescription] = useState([]);

    // const handleStartDateChange = (date) => {
    //     setStartDate(date)
    // }
    // const handleEndateChange = (date) => {
    //     setEndDate(date)
    // }
    // const handleCrimeDescription = (crime) => {
    //     setCrimeDescription(crime)
    // }

    const mystyle = {
        wrapper: {
            position: "relative",
        },
        over_map: {
            position: "absolute",
            bottom: "100px",
            right: "40px",
            zIndex: 99
        }
    };

    return (
        <Provider store={store}>
            <div style={mystyle.wrapper} id="wrapper">
                <div id="google_map">
                    <Map />
                </div>

                <div style={mystyle.over_map} id="over_map">
                    <FormDialog />
                </div>
            </div>
        </Provider>
    )
}