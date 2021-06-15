import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import DateRangeSelector from '../components/DateRangeSelector';
import MultipleSelectChip from '../components/MultipleSelect';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

export default function AccordionForm() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <div className={classes.column}>
                        <Typography className={classes.heading}>Date Range</Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.heading}>Crime type</Typography>
                    </div>
                    <div className={classes.column}>
                        
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <div className={classes.column} >
                        <DateRangeSelector/>
                    </div>
                    <div className={classes.column}>
                        <MultipleSelectChip/>
                    </div>
                    <div className={clsx(classes.column, classes.helper)}>
                        <Typography variant="caption">
                            Select your destination of choice
                            <br />
                            <a href="#secondary-heading-and-columns" className={classes.link}>
                                Learn more
                            </a>
                        </Typography>
                    </div>
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                    <Button size="small" color="secondary">Cancel</Button>
                    <Button size="small" color="primary">
                        Search
          </Button>
                </AccordionActions>
            </Accordion>
        </div>
    );
}
