import { processGeojson } from 'kepler.gl/processors';

//const localUrl = 'http://localhost:3000'
const baseUrl = 'https://db-team-6-test.herokuapp.com'

export const fetchDataFrame = () => {
    // const request = {
    //     "startdate": range[0],
    //     "enddate": range[1]
    // }
    try {
        //const url = `${baseUrl}/api/estimate`;
        const data = fetch('./data/Part1_Crime_data_2021-2015.geojson')
            .then(response => response.json())
            .then(response => processGeojson(response))
        console.log("data_Api",data)
        return data
    } catch (error) {
        console.log(error)
    }
}