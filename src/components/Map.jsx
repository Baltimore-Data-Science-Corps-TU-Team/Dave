import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap } from 'kepler.gl/actions';

export default function Map({ fetchedBoundaryDataFrame, fetchedCrimeDataFrame, mapConfiguration }) {

    const dispatch = useDispatch();

    const boundaryDataset = {
        info: {
            label: 'Boundaries',
            id: '6kbq7nrmc'
        },
        data: fetchedBoundaryDataFrame
    }

    const crimeDataset = {
        info: {
            label: 'Crime',
            id: 'ciaeceh0r'
        },
        data: fetchedCrimeDataFrame
    }

    useEffect(() => {
        console.log("data frame->", fetchedBoundaryDataFrame)
        console.log("mapconfiguration->", mapConfiguration)
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