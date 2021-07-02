import React, { useEffect, useState } from 'react';
import keplerGlReducer from 'kepler.gl/reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { taskMiddleware } from 'react-palm/tasks';
import { Provider } from 'react-redux';
import FormDialog from './Dialog';
import { processGeojson } from 'kepler.gl/processors';
import Map from './Map';
import { getMapConfiguration } from '../utils';
import { fetchCrimeGeoJson, fetchBoundaryGeoJson } from '../api';
import { format } from 'date-fns';

/* Kelper boiler plate reducer settings */
const customKeplerReducer = keplerGlReducer.initialState({
    uiState: {
        currentModal: null
    }
});
const reducer = combineReducers({
    keplerGl: customKeplerReducer,
});
const store = createStore(reducer, {}, applyMiddleware(taskMiddleware));


export default function Kepler() {
    //styling for button over kepler map
    const mapOverlayStyle = {
        wrapper: {
            position: "relative",
        },
        over_map: {
            position: "absolute",
            bottom: "280px",
            right: "14px",
            zIndex: 9999
        }
    };

    //contain all controlled states
    const [state, setState] = useState({
        success: false,
        loading: false,
        fetchedBoundaryDataFrame: undefined,
        mapConfiguration: undefined,
        radioValue: '',
        crimeDescription: '',
        endDate: new Date(),
        startDate: new Date(),
        fetchedCrimeDataFrame: undefined
    });

    //get data from server
    const handleSubmit = async (event, newValue) => {
        event.preventDefault();
        const request = {
            startdate: format(new Date(state.startDate), "yyyy-MM-dd"),
            enddate: format(new Date(state.endDate), "yyyy-MM-dd"),
            crime: state.crimeDescription.toUpperCase()
        }
        const fetchedCrimeGeoJson = (await fetchCrimeGeoJson(request))
        setState({
            ...state,
            fetchedCrimeDataFrame: processGeojson(fetchedCrimeGeoJson),
            loading: false,
            success: true
        })
    }
    const toggleSuccess = () => {
        setState({ ...state, success: false })
    }
    const toggleLoading = () => {
        setState({ ...state, loading: true })
    }
    const handleRadioChange = (event) => {
        const value = event.target.alt
        const configuration = getMapConfiguration(value)
        setState({ ...state, mapConfiguration: configuration, radioValue: value })
    };
    const handleCrimeDescriptionChange = (event, newValue) => {
        setState({ ...state, crimeDescription: newValue })
    }
    const handleEndDateChange = (date) => {
        setState({ ...state, endDate: date })
    }
    const handleStartDateChange = (date) => {
        setState({ ...state, startDate: date })
    }

    //automatically load Baltimore boundary data to kepler component
    useEffect(() => {
        const fetchApi = async () => {
            const fetchedBoundaryGeoJson = await fetchBoundaryGeoJson()
            setState({ ...state, fetchedBoundaryDataFrame: processGeojson(fetchedBoundaryGeoJson) })
        }
        fetchApi();
    }, [setState])

    return (
        <Provider store={store}>
            <div style={mapOverlayStyle.wrapper} id="wrapper">
                <div id="kepler-map">
                    <Map
                        fetchedBoundaryDataFrame={state.fetchedBoundaryDataFrame}
                        fetchedCrimeDataFrame={state.fetchedCrimeDataFrame}
                        mapConfiguration={state.mapConfiguration}
                    />
                </div>

                <div style={mapOverlayStyle.over_map} id="over_map">
                    <FormDialog
                        state={state}
                        handleStartDateChange={handleStartDateChange}
                        handleEndDateChange={handleEndDateChange}
                        handleCrimeDescriptionChange={handleCrimeDescriptionChange}
                        handleRadioChange={handleRadioChange}
                        handleSubmit={handleSubmit}
                        toggleSuccess={toggleSuccess}
                        toggleLoading={toggleLoading}
                    />
                </div>
            </div>
        </Provider>
    )
}