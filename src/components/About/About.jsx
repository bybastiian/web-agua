import React from "react";
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import imgAbout from '../static/img/about-1.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    img: {
        height: 260,
        width: 260,
    },
    hr: {
        height: "3px",
        width: "70px",
        background: "#6aaf08",
        marginBottom: "40px",
        border: "0",
        marginLeft: "64px"
    },
    span: {
        color: "#6aaf08",
    },
    box: {
        margin: theme.spacing(1),
    }
}));

const About = (props) => {
    const classes = useStyles();

    return (
        <Grid container >
            <Grid key={1} item xs={6}>
                <Typography color="textSecondary">
                    <Box fontWeight="fontWeightBold" fontSize="h4.fontSize" paddingLeft={8}>
                        Quiénes
                            <span className={classes.span}> Somos</span>
                    </Box>
                    <hr className={classes.hr} ></hr>
                    <Box fontWeight="fontWeightLight" paddingLeft={8} paddingRight={4}>
                        Empresa “Natural Agua Purificada” comenzó sus servicios en el año 2013, con el fin de poder incorporarse al ámbito de la comercialización de botellones de agua purificada para así poder entregar al mercado nacional un producto de categoría, rigiéndose bajo los estándares de calidad que el Ministerio de Salud tiene estipulado.
                        </Box>
                    <br></br>
                    <Box fontWeight="fontWeightLight" paddingLeft={8} paddingRight={4} paddingBottom={4}>
                        Actualmente tenemos nuestra planta productiva en la Región Metropolitana, en la comuna de Maipú. Entregando aproximadamente 100.000 litros mensuales a todos nuestros clientes. El agua que nosotros distribuimos cuenta con la Resolución Sanitaria Nº 1913148836 dictada por el Seremi de Salud de la Región Metropolitana.
                        </Box>
                </Typography>
                <Box paddingLeft={7} paddingBottom={8}>
                    <Button className={classes.box} variant="contained" size="large" color="secondary">R. SANITARIA</Button>
                    <Button className={classes.box} variant="contained" size="large" color="secondary">DONACIÓN</Button>
                </Box>
            </Grid>
            <Grid key={2} item xs={6}>
                <img className={classes.img} src={imgAbout} />
                <Typography color="textSecondary">
                    <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                        Casa Matriz
                        </Box>
                    <Box fontWeight="fontWeightLight">
                        Nueva San Martín 2324, Maipú,
                        </Box>
                    <Box fontWeight="fontWeightLight">
                        Santiago
                        </Box>
                </Typography>
            </Grid>
        </Grid>
    );
}

export default About