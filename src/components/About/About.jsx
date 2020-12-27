import React from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    img:{
        backgroundColor: '#cfe8fc',
        height: '100vh'
    }
}));

const About = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Container>
                <Typography component="div" className={classes.img} />
            </Container>
        </div>
    );
}

export default About