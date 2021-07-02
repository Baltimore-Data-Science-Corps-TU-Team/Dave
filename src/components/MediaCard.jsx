import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 150,
    },
});

export default function MediaCard({ img, title, value, tooltip, handleCardSelect, selected }) {
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
                    onClick={handleCardSelect}
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