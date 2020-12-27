import React from 'react';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Scroll from '../Scroll/Scroll'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import imgIntro from '../static/img/intro-bg.jpg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow:1,
        // padding: theme.spacing(3),
    },
    paperContainer: {
        backgroundImage: `url(${imgIntro})`
    },
  }));

const Container = () =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Navbar></Navbar>
            <Scroll showBelow={50}></Scroll>
                        
            <div className={classes.content}>
                {/* <div className={classes.toolbar}></div> */}
                {/* <About></About> */}
                <Grid container alignContent={'center'}>
                    {/* <img src={imgIntro} /> */}
                </Grid>  
            </div>

        </div>
    )
}

export default Container