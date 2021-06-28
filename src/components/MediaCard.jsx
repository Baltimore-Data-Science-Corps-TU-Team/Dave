import React, {useState} from 'react';
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

export default function MediaCard({ img, title, value, tooltip, isSelected, handleOnClick, selected }) {
    const classes = useStyles();

    return (
        <Card raised={selected} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={value}
                    className={classes.media}
                    image={img}
                    title={title}
                    onClick={handleOnClick}
                />
                <CardContent>
                    <Typography variant="caption">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

// ["h1","h2","h3","h4","h5","h6",
// "subtitle1","subtitle2","body1","body2",
// "caption","button","overline","srOnly","inherit"]