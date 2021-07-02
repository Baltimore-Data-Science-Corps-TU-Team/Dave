import { useState } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaCard from './MediaCard';
import { CARDPROPS } from '../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  grid:{
    margin: 'auto'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export function MapConfigGrid({ radioValue, handleRadioChange }) {
  const classes = useStyles();

  const handleCardSelect = (event) => {
    handleRadioChange(event)
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.grid}>
        {CARDPROPS.map((card, index) => (
          <Grid key={index} item xs={6}>
            <MediaCard
              selected={(radioValue === card.value) ? true : false}
              img={card.img}
              title={card.title}
              description={card.tooltip}
              value={card.value}
              handleCardSelect={handleCardSelect}
            />
          </Grid>
        ))}
      </Grid>
      <br />
    </div>
  );
}


