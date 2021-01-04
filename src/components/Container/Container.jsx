import React from 'react';
import Navbar from '../Navbar/Navbar';
import Scroll from '../Scroll/Scroll'
import { makeStyles } from '@material-ui/core/styles';
import Intro from '../Intro/Intro'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar
}));

const Container = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Navbar></Navbar>
            <Scroll showBelow={50}></Scroll>
            <Intro></Intro>
        </div>
    )
}

export default Container