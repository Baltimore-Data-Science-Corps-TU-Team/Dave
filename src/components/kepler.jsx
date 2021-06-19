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

import { fetchCrimeGeoJson, fetchBoundaryGeoJson } from '../api';

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

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [crimeDescription, setCrimeDescription] = useState([]);
    const [fetchedCrimeDataFrame, setFetchedCrimeDataFrame] = useState(undefined);
    const [fetchedBoundaryDataFrame, setFetchedBoundaryDataFrame] = useState(undefined);
    const [mapConfig, setMapConfig] = useState('');

    const handleMapConfigChange = (event) => {
        setMapConfig(event.target.value);
    };

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
        const fetchedCrimeGeoJson = (await fetchCrimeGeoJson(startDate, endDate, crimeDescription))
        setFetchedCrimeDataFrame(processGeojson(fetchedCrimeGeoJson))
    }

    useEffect(() => {
        const fetchApi = async () => {
            const fetchedBoundaryGeoJson = await fetchBoundaryGeoJson()
            setFetchedBoundaryDataFrame(processGeojson(fetchedBoundaryGeoJson))
        }
        fetchApi();
    }, [])

    return (
        <Provider store={store}>
            {/* <div style={mystyle.wrapper} id="wrapper">
                <div id="google_map">
                    <Map fetchedDataFrame={fetchedDataFrame} />
                </div>

                <div style={mystyle.over_map} id="over_map">
                    <FormDialog
                        startDate
                        endDate={endDate}
                        crimeDescription={crimeDescription}
                        mapConfig={mapConfig}
                        handleStartDateChange={handleStartDateChange}
                        handleEndDateChange={handleEndDateChange}
                        handleCrimeDescriptionChange={handleCrimeDescriptionChange}
                        handleMapConfigChange={handleMapConfigChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div> */}
            <FormDialog
                        startDate={startDate}
                        endDate={endDate}
                        crimeDescription={crimeDescription}
                        mapConfig={mapConfig}
                        handleStartDateChange={handleStartDateChange}
                        handleEndDateChange={handleEndDateChange}
                        handleCrimeDescriptionChange={handleCrimeDescriptionChange}
                        handleMapConfigChange={handleMapConfigChange}
                        handleSubmit={handleSubmit}
                    />
        </Provider>
    )
}