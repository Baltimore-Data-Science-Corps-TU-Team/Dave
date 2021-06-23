import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap } from 'kepler.gl/actions';

export default function Map({ fetchedBoundaryDataFrame, fetchedCrimeDataFrame, mapConfiguration }) {

    const dispatch = useDispatch();

    const boundaryDataset = (
        (fetchedBoundaryDataFrame)
            ? {
                info: {
                    label: 'boundaries',
                    id: 'baltimore-boundaries'
                },
                data: fetchedBoundaryDataFrame
            }
            : {}
    )

    const crimeDataset = (
        (fetchedCrimeDataFrame)
            ? {
                info: {
                    label: 'crime',
                    id: 'crime-baltimore'
                },
                data: fetchedCrimeDataFrame
            }
            : {}
    )

    useEffect(() => {
        console.log("data frame->", fetchedBoundaryDataFrame)
        console.log("mapconfiguration->", mapConfiguration.config)
        dispatch(
            addDataToMap({
                datasets: [boundaryDataset, crimeDataset],
                option: {
                    centerMap: true,
                    readOnly: false
                },
                config: mapConfiguration.config

            })
        )

    }, [dispatch, boundaryDataset, crimeDataset, mapConfiguration.config])


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