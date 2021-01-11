import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import imgTestimonials from '../static/img/testimonials-bg.jpg';
import imgLogo1 from '../static/img/logo_1.png';
import imgLogo2 from '../static/img/logo_2.png';
import imgLogo3 from '../static/img/logo_3.png';
import imgLogo4 from '../static/img/logo_4.png';
import imgLogo5 from '../static/img/logo_5.png';

const useStyles = makeStyles((theme) => ({
    divTestimonials: {
        background: `#444 url(${imgTestimonials}) center center no-repeat fixed`,
        backgroundSize: 'cover',
    },
    divOverlay: {
        padding: '120px 0',
        background: 'rgba(106, 175, 8, 0.85)',
    },
    hr: {
        height: '3px',
        width: '70px',
        textAlign: 'center',
        background: 'rgba(255,255,255,0.6)',
        marginTop: '20px',
        marginBottom: '20px',
        border: '0',
    },
    img: {
        height: 118,
        width: 400,
    },
}));

const Testimonials = (props) => {
    const classes = useStyles();

    var items = [
        {
            img: imgLogo1
        },
        {
            img: imgLogo2
        },
        {
            img: imgLogo3
        },
        {
            img: imgLogo4
        },
        {
            img: imgLogo5
        }
    ]

    function Item(props) {
        return (
            <Box align='center'>
                <img className={classes.img} src={props.item.img} />
            </Box>
        )
    }

    return (
        <div className={classes.divTestimonials}>
            <div className={classes.divOverlay}>
                <Typography color="textPrimary" align='center' >
                    <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                        Clientes
                    </Box>
                    <hr className={classes.hr} ></hr>
                </Typography>
                <Carousel navButtonsAlwaysInvisible>
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
            </div>
        </div>
    );
}

export default Testimonials