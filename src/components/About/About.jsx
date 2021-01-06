import React from "react";
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

const About = (props) => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={5}>
                <Typography>Quiénes Somos</Typography>
            </Grid>
            <Grid item xs={5}>

            </Grid>
        </Grid>
    );
}

export default About