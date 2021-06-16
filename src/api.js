
//const localUrl = 'http://localhost:3000'
const baseUrl = 'https://db-team-6-test.herokuapp.com'
const crimeData = './data/Part1_Crime_data_2021-2015.geojson'
const covidData = './data/covid-19.json'
const boundaries = './data/Part_1_Crime.geojson'

export const fetchDataFrame = () => {
    // const request = {
    //     "startdate": range[0],
    //     "enddate": range[1]
    // }
    try {
        //const url = `${baseUrl}/api/estimate`;
        const data = fetch(boundaries)
            .then(response => response.json())
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchDataFrame2 = () => {
    // const request = {
    //     "startdate": range[0],
    //     "enddate": range[1]
    // }
    try {
        //const url = `${baseUrl}/api/estimate`;
        const data = fetch(crimeData)
            .then(response => response.json())
        return data
    } catch (error) {
        console.log(error)
    }
}