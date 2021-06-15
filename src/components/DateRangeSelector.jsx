// import React, { useState } from 'react';
// import EventIcon from '@material-ui/icons/Event';
// import SearchIcon from '@material-ui/icons/Search';
// import { format, isValid } from 'date-fns';
// import { makeStyles } from '@material-ui/core/styles';
// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import DateRangePicker from '@material-ui/lab/DateRangePicker';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import { CircularProgress, Backdrop, IconButton, Typography, TextField, Divider, Box, Grid } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         padding: '2px 15px',
//         display: 'flex',
//         alignItems: 'center',
//         width: 400,
//         flexGrow: 1,
//     },
//     input: {
//         marginLeft: theme.spacing(1),
//         flex: 1,
//     },
//     iconButton: {
//         padding: 10,
//     },
//     divider: {
//         backgroundColor: "green",
//         height: 28,
//         margin: 4,
//         width: 40,
//         marginLeft: -20
//     },
//     DateRangePicker: {
//         padding: 10
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//         justifyContent: 'center'
//     },
//     backdrop: {
//         zIndex: theme.zIndex.drawer + 1,
//         color: '#fff',
//     },
// }));

// export default function DateRangeSelector({ handleDateChange, dateSelection }) {
//     const classes = useStyles();
//     const [popperOpen, setPopperOpen] = useState(false)
//     const [value, setValue] = React.useState([null, null]);

//     return (
//         <div className={classes.root}>
//             <Grid container spacing={3}>
//                 {/* <Grid item xs={12} className={classes.paper}>
//                     <Typography fontWeight={600} gutterBottom> Select a date range to analyze </Typography>
//                 </Grid> */}
//                 <Box className={classes.root}>
//                     <LocalizationProvider dateAdapter={AdapterDateFns}>
//                         <DateRangePicker
//                             className={classes.DateRangePicker}
//                             calendars={1}
//                             open={popperOpen}
//                             onClose={() => setPopperOpen(false)}
//                             disableFuture
//                             startText="Start Date"
//                             endText="End Date"
//                             value={value}
//                             allowKeyboardControl={false}
//                             //minDate={new Date('Jan 1 2021')}
//                             onChange={(newValue) => {
//                                 setValue(newValue.map(value => value && isValid(value) ? format(value, 'MM/dd/yyyy') : null))
//                             }}
//                             // inputFormat="MM/dd/yyyy"
//                             // mask='__/__/____'
//                             renderInput={(startProps, endProps) => (
//                                 <React.Fragment>
//                                     <TextField {...startProps} onClick={() => setPopperOpen(true)} size="small" variant="standard" /> {/* style={{ marginRight: 10 }}*/}
//                                     <TextField {...endProps} onClick={() => setPopperOpen(true)} size="small" variant="standard" />
//                                 </React.Fragment>
//                             )}
//                         />
//                     </LocalizationProvider>
//                     <IconButton onClick={() => setPopperOpen(true)}>
//                         <EventIcon />
//                     </IconButton>
//                 </Box>
//             </Grid>
//         </div>
//     )
// }