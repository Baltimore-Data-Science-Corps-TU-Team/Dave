import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from './MediaCard';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import clusterImg from '../map-config-jpg/Cluster.jpg';
import PointsImg from '../map-config-jpg/Points.jpg';
import PointsByRegionImg from '../map-config-jpg/Points-by-Region.jpg';
import PointsByDescriptionImg from '../map-config-jpg/Points-by-Description.jpg';
import PointsByWeaponImg from '../map-config-jpg/Points-by-Weapon.jpg';
import DefaultImg from '../map-config-jpg/Default.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function MapConfigGrid({ mapConfig, handleMapConfigChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {tileData.map((tile) => (
          <Grid item xs={6}>
            <MediaCard
              img={tile.img}
              title={tile.title}
              description={tile.description}
            />
          </Grid>
        ))}
      </Grid>
      <br/>
    </div>
    // <TitlebarGridList />
  );
}

// function RadioMapConfig({ mapConfig, handleMapConfigChange }) {
//   console.log("map-config", mapConfig)
//   return (
//     <FormControl component="fieldset">
//       {/* <FormLabel component="legend">Map Configuration</FormLabel> */}
//       <RadioGroup aria-label="mapConfig" name="mapConfig" value={mapConfig} onChange={handleMapConfigChange}>
//         <FormControlLabel value="cluster" control={<Radio />} label="Cluster Visualization" />
//         <FormControlLabel value="description" control={<Radio />} label="Points by description" />
//         <FormControlLabel value="weapon" control={<Radio />} label="Points by weapon" />
//         <FormControlLabel value="region" control={<Radio />} label="Points by region" />
//         <FormControlLabel value="point-only" control={<Radio />} label="Points Only" />
//         <FormControlLabel value="other" control={<Radio />} label="Custom" />
//       </RadioGroup>
//     </FormControl>
//   );
// }


const tileData = [
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
    img: DefaultImg,
    title: 'Custom',
    description: 'author',
  },
];

function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
