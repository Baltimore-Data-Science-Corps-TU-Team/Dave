import CustomImg from './map-config-jpg/Default.jpeg';
import clusterImg from './map-config-jpg/Cluster.jpg';
import PointsImg from './map-config-jpg/Points.jpg';
import PointsByRegionImg from './map-config-jpg/Points-by-Region.jpg';
import PointsByDescriptionImg from './map-config-jpg/Points-by-Description.jpg';
import PointsByWeaponImg from './map-config-jpg/Points-by-Weapon.jpg';

const CARDPROPS = [
    {
      img: clusterImg,
      title: 'Cluster',
      description: 'author',
    },
    {
      img: PointsImg,
      title: 'Points Only',
      description: 'author',
    },
    {
      img: PointsByRegionImg,
      title: 'Points by Region',
      description: 'author',
    },
    {
      img: PointsByWeaponImg,
      title: 'Points by Weapon',
      description: 'author',
    },
    {
      img: PointsByDescriptionImg,
      title: 'Points by Description',
      description: 'author',
    },
    {
      img: CustomImg,
      title: 'Custom',
      description: 'author',
    },
  ];

const CONFIGURATION = {
    cluster: {
        config: "cluster"
    },
    points: {
        config: "points"
    },
    weapon: {
        config: "weapon"
    },
    description: {
        config: "description"
    },
    region: {
        config: "region"
    },
    custom: {
        config: "custom"
    },
}

const CRIME_OPTIONS = [
  'Homicide',
  'Arson',
  'Auto theft',
  'Robbery',
  'Shoplifting'
];

export { CARDPROPS, CONFIGURATION, CRIME_OPTIONS }