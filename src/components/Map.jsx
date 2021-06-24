import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap, layerConfigChange, layerVisConfigChange, updateVisData } from 'kepler.gl/actions';

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
        if (fetchedCrimeDataFrame && mapConfiguration) {
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
        }

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