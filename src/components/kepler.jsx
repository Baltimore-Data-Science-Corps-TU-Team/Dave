import React, { useEffect, useState } from 'react';
import keplerGlReducer from 'kepler.gl/reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { taskMiddleware } from 'react-palm/tasks';
import { Provider, useDispatch } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap } from 'kepler.gl/actions';
import AccordionForm from './AccordionForm';
import FormDialog from './Dialog';
import { processGeojson } from 'kepler.gl/processors';

import { fetchDataFrame, fetchDataFrame2 } from '../api';

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

function Map(fetchedDataFrame) {

    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchedDataFrame) {
            console.log("data frame->", fetchedDataFrame.fetchedDataFrame)
            dispatch(
                addDataToMap({
                    datasets: {
                        info: {
                            label: 'crime',
                            id: 'crime-baltimore'
                        },
                        data: fetchedDataFrame.fetchedDataFrame
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
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
                width={window.innerWidth}
                height={window.innerHeight}
                appName={'Data Science Corps'}
            />
        </div>
    )
}


export default function Kepler() {
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

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [crimeDescription, setCrimeDescription] = useState([]);
    const [fetchedDataFrame, setFetchedDataFrame] = useState(undefined);
    const [mapConfig, setMapConfig] = useState();

    const handleStartDateChange = (date) => {
        setStartDate(date)
    }
    const handleEndDateChange = (date) => {
        setEndDate(date)
    }
    const handleCrimeDescriptionChange = (event, newValue) => {
        setCrimeDescription(newValue)
    }
    const handleSubmit = async (event, newValue) => {
        console.log(startDate, endDate, crimeDescription)
        event.preventDefault();
        setFetchedDataFrame(await fetchDataFrame2(startDate, endDate, crimeDescription))
    }

    useEffect(() => {
        const fetchApi = async () => {
            const FetchedDataFrame = await fetchDataFrame()
            setFetchedDataFrame(processGeojson(FetchedDataFrame))
        }
        fetchApi();
    }, [setFetchedDataFrame])

    return (
        <Provider store={store}>
            <div style={mystyle.wrapper} id="wrapper">
                <div id="google_map">
                    <Map fetchedDataFrame={fetchedDataFrame} />
                </div>

                <div style={mystyle.over_map} id="over_map">
                    <FormDialog
                        startDate={startDate}
                        endDate={endDate}
                        crimeDescription={crimeDescription}
                        handleStartDateChange={handleStartDateChange}
                        handleEndDateChange={handleEndDateChange}
                        handleCrimeDescriptionChange={handleCrimeDescriptionChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </Provider>
    )
}