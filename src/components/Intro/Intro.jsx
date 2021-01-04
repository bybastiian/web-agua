import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import imgIntro from '../static/img/intro-bg.jpg';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
    },
    heroContainer: {
        height: 800,
        backgroundImage: `url(${imgIntro})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: `calc(100vw - 17px)`,
        margin: -8,
    }
}));

const Intro = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Grid container direction="column" justify="flex-end" alignItems="right " alignContent={'center'} className={classes.heroContainer}>
            </Grid>
        </div>
    );
}

export default Intro