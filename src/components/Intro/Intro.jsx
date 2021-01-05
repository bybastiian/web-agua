import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import imgIntro from '../static/img/intro-bg.jpg';

const useStyles = makeStyles((theme) => ({
    heroContainer: {
        height: 800,
        backgroundImage: `url(${imgIntro})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: `calc(100vw - 17px)`,
        margin: -8,
    },
    title: {
        marginTop: 80,
    }
}));

const Intro = (props) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" justify="center" className={classes.heroContainer}>
            <Box mt={8}>
                <Typography color="textPrimary">
                    <Box fontWeight="fontWeightBold" fontSize="h2.fontSize" textAlign="center" >
                        AGUA PURIFICADA
                    </Box>
                    <Box fontWeight="fontWeightRegular" fontSize="h5.fontSize" textAlign="center">
                        Sana Libre de Sodio
                    </Box>
                    <Box fontWeight="fontWeightRegular" fontSize="h6.fontSize" textAlign="center">
                        Sólo debe hacer su pedido y estaremos con usted...
                    </Box>
                    <Box textAlign="center" mt={8}>
                        <Button variant="contained" size="large" color="inherit">QUIÉNES SOMOS</Button>
                    </Box>
                </Typography>
            </Box>
        </Grid>
    );
}

export default Intro