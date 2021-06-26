
//const localUrl = 'http://localhost:3000'
const localCrimeData = './data/Part1_Crime_data_2021.geojson'
const covidData = './data/covid-19.json'
const boundaries = './data/Crime_by_Boundary.geojson'

const SERVER = 'http://10.55.15.252/'

export const fetchBoundaryGeoJson = (startdate, enddate, crime) => {
    try {
        const data = fetch(boundaries)
            .then(response => response.json())
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchCrimeGeoJson = (request) => {
    console.log("request->", request)
    try {
        const url = `${SERVER}/clusters?fromdate=${request.startdate}&todate=${request.enddate}&crime=${request.crime}`
        const data = fetch(localCrimeData)
            .then(response => response.json())
        return data
    } catch (error) {
        console.log(error)
    }
}