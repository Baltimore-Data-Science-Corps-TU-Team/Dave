import { useEffect, useState } from 'react';
import keplerGlReducer from 'kepler.gl/reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { taskMiddleware } from 'react-palm/tasks';
import { Provider, useDispatch } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap } from 'kepler.gl/actions';
// import data from '../data/covidDataset'
import UseSwr from "swr";

const customKeplerReducer = keplerGlReducer.initialState({
    uiState: {
        activeSidePanel: null,
        currentModal: null
    }
});

const reducer = combineReducers({
    keplerGl: customKeplerReducer,
});
const initialState = {}

const store = createStore(reducer, {}, applyMiddleware(taskMiddleware));

function Map() {
    const dispatch = useDispatch();
    const { data } = UseSwr("crime", async () => {
        const response = await fetch('./data/covid-19.json')
        const data = await response.json();
        return data;
    })

    useEffect(() => {
        if (data){
            console.log(data)
            dispatch(
                addDataToMap({
                    datasets: {
                        info: {
                            label: 'crime',
                            id: 'crime-baltimore'
                        },
                        data: data
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
    }, [dispatch, data])


    
    return (
        <KeplerGl
            id="1"
            mapboxApiAccessToken={"pk.eyJ1IjoiZGF2LW4iLCJhIjoiY2twYXV0aXloMGRxdzJwbzRoNjA1N2tyaiJ9.d_eAHzXAXQh1xj2qMgaWpA"}
            width={window.innerWidth}
            height={window.innerHeight}
            appName={'Data Science Corps'}
        />
    )
}

export default function kepler() {
    return (
        <Provider store={store}>
            <Map />
        </Provider>
    )
}
// })
// const [fetchedData, setFetchedData] = useState([]);
// useEffect(() => {
//     const fetchAPI = async () => {
//         setFetchedData(await fetch('/covid_data.json'));
//     }

//     fetchAPI();
//     //console.log(fetchedMonths);
// }, [setFetchedData]);
// console.log(data.features)

// useEffect(() => { 
//     if (data) 
//     {
//         console.log(data)
//         dispatch(
//         addDataToMap({
//             datasets: {
//                 info: {
//                     label: 'crime',
//                     id: 'crime-baltimore'
//                 },
//                 data: data
//             },
//             option: {
//                 centerMap: true,
//                 readOnly: false
//             },
//             config: {
//                 visState: {
//                     filters: [
//                         // {
//                         //     id: 'me',
//                         //     dataId: 'test_trip_data',
//                         //     name: 'tpep_pickup_datetime',
//                         //     type: 'timeRange',
//                         //     enlarged: true
//                         // }
//                     ]
//                 }
//             }
//         })
//     )
// }}, [dispatch, data])    