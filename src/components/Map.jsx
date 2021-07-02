import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap } from 'kepler.gl/actions';

export default function Map({ fetchedBoundaryDataFrame, fetchedCrimeDataFrame, mapConfiguration }) {

    const dispatch = useDispatch();

    const boundaryDataset = useMemo(() => {
        return {
            info: {
                label: 'Boundaries',
                id: '6kbq7nrmc'
            },
            data: fetchedBoundaryDataFrame
        }
    }, [fetchedBoundaryDataFrame])

    const crimeDataset = useMemo(() => {
        return {
            info: {
                label: 'Crime',
                id: 'ciaeceh0r'
            },
            data: fetchedCrimeDataFrame
        }
    }, [fetchedCrimeDataFrame])

    useEffect(() => {
        dispatch(
            addDataToMap({
                datasets: [boundaryDataset, crimeDataset],
                option: {
                    centerMap: true,
                    readOnly: false
                },
                config: mapConfiguration

            })
        )
    }, [dispatch, boundaryDataset, crimeDataset, mapConfiguration])

    console.log("env->", process.env.REACT_APP_MAPBOX_API)
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