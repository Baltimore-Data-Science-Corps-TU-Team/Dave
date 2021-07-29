
//const localCrimeData = './data/Part1_Crime_data_2021.geojson'
const boundaries = './data/Crime_by_Boundary.geojson'

const SERVER = 'http://10.55.15.233'

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
    try {
        const serverUrl = `${SERVER}/clusters?fromdate=${request.startdate}&todate=${request.enddate}&crime=${request.crime}`
        const data = fetch(serverUrl)
            .then(response => response.json())
        return data
    } catch (error) {
        console.log(error)
    }
}