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

    const [state, setState] = useState({
        startDate: new Date(),
        endDate: new Date(),
        crimeDescription: [],
        fetchedCrimeDataFrame: undefined,
        fetchedBoundaryDataFrame: undefined,
        mapConfiguration: {
            config: {}
        },
        radioValue: '',
        selectedConfiguration: '',
        loading: false,
        success: undefined
    });

    const handleSubmit = async (event, newValue) => {
        event.preventDefault();
        const request = {
            startDate: format(new Date(state.startDate), "yyyy-MM-dd"),
            endDate: format(new Date(state.endDate), "yyyy-MM-dd"),
            crimeDescription: state.crimeDescription
        }

        const fetchedCrimeGeoJson = (await fetchCrimeGeoJson(request))
        console.log(fetchedCrimeGeoJson)
        setState({
            ...state,
            fetchedCrimeDataFrame: processGeojson(fetchedCrimeGeoJson),
            loading: false,
            success: 'true'
        })
    }

    const toggleSuccess = (value) => {
        setState({ ...state, success: value })
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

    useEffect(() => {
        const fetchApi = async () => {
            const fetchedBoundaryGeoJson = await fetchBoundaryGeoJson()
            setState({ ...state, fetchedBoundaryDataFrame: processGeojson(fetchedBoundaryGeoJson) })
        }
        fetchApi();
    }, [setState])

    return (
        <Provider store={store}>
            <div style={mystyle.wrapper} id="wrapper">
                <div id="google_map">
                    <Map
                        fetchedBoundaryDataFrame={state.fetchedBoundaryDataFrame}
                        fetchedCrimeDataFrame={state.fetchedCrimeDataFrame}
                        mapConfiguration={state.mapConfiguration}
                    />
                </div>

                <div style={mystyle.over_map} id="over_map">
                    <FormDialog
                        state={state}
                        handleStartDateChange={handleStartDateChange}
                        handleEndDateChange={handleEndDateChange}
                        handleCrimeDescriptionChange={handleCrimeDescriptionChange}
                        handleRadioChange={handleRadioChange}
                        handleSubmit={handleSubmit}
                        toggleSuccess={toggleSuccess}
                    />
                </div>
            </div>
            {/* <FormDialog
                state={state}
                handleStartDateChange={handleStartDateChange}
                handleEndDateChange={handleEndDateChange}
                handleCrimeDescriptionChange={handleCrimeDescriptionChange}
                handleRadioChange={handleRadioChange}
                handleSubmit={handleSubmit}
                toggleSuccess={toggleSuccess}
            /> */}
        </Provider>
    )
}