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
        loading: false,
        success: undefined
    });

    useEffect(() => {
        const fetchApi = async () => {
            const fetchedBoundaryGeoJson = await fetchBoundaryGeoJson()
            setState({ ...state, fetchedBoundaryDataFrame: processGeojson(fetchedBoundaryGeoJson) })
        }
        fetchApi();
    }, [])

    const toggleSuccess = (value) => {
        setState({...state, success: value})
    }
    const toggleLoading = () => {
        setState({...state, loading: !state.loading})
    }

    const handleRadioChange = (event) => {
        const value = event.target.value
        const configuration = getMapConfiguration(value)
        setState({ ...state, mapConfiguration: configuration, radioValue: value })
    };

    const handleStartDateChange = (date) => {
        setState({ ...state, startDate: date })
    }

    const handleEndDateChange = (date) => {
        setState({ ...state, endDate: date })
    }

    const handleCrimeDescriptionChange = (event, newValue) => {
        setState({ ...state, crimeDescription: newValue })
    }

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

    return (
        <Provider store={store}>
            {/* <div style={mystyle.wrapper} id="wrapper">
                <div id="google_map">
                    <Map
                        fetchedBoundaryDataFrame={state.fetchedBoundaryDataFrame}
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
                    />
                </div>
            </div> */}
            <FormDialog
                state={state}
                handleStartDateChange={handleStartDateChange}
                handleEndDateChange={handleEndDateChange}
                handleCrimeDescriptionChange={handleCrimeDescriptionChange}
                handleRadioChange={handleRadioChange}
                handleSubmit={handleSubmit}
                toggleLoading={toggleLoading}
                toggleSuccess={toggleSuccess}
            />
        </Provider>
    )
}