import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 150,
    },
});

export default function MediaCard({img, title, value, tooltip, isSelected, handleOnClick}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={value}
                    className={classes.media}
                    image={img}
                    title={title}
                    selected={isSelected}
                    onClick={handleOnClick}
                />
                <CardContent>
                    <Typography variant="caption" component="h5">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
        </Card>
    );
}

// ["h1","h2","h3","h4","h5","h6",
// "subtitle1","subtitle2","body1","body2",
// "caption","button","overline","srOnly","inherit"]