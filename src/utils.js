import { CONFIGURATION } from './constants';

function getMapConfiguration(value) {
    switch (value) {
        case 'cluster':
            return CONFIGURATION.cluster
        case 'points':
            return CONFIGURATION.points
        case 'weapon':
            return CONFIGURATION.weapon
        case 'description':
            return CONFIGURATION.description
        case 'region':
            return CONFIGURATION.region
        case 'custom':
            return CONFIGURATION.custom
        default:
            return 
    }
}

export { getMapConfiguration }