import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    divContact: {
        paddingTop: '100px',
        paddingBottom: '100px',
    },
    hrContactUp: {
        height: "3px",
        width: "70px",
        background: "#6aaf08",
        border: "0",
        marginTop: "20px",
        marginBottom: "20px"
    },
    maps: {
        width: "450px",
        height: "450px",
        frameborder: "0",
        border: "0",
        allowfullscreen: "",
        tabindex: "0",
    },
    hrContactDown: {
        height: "3px",
        width: "70px",
        background: "#ddd",
        border: "0",
        marginTop: "20px",
        marginBottom: "20px"
    },
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    text: {
        width: "50%",
        backgroundColor: '#fff'
    },
}));

const Contact = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.divContact}>
            <Typography color="textSecondary" align='center' >
                <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                    Contacto
                </Box>
                <hr className={classes.hrContactUp} ></hr>
                <Box fontWeight="fontWeightRegular" marginBottom={8}>
                    Visítenos en nuestras dependencias
                </Box>
            </Typography>
            <Box align='center' paddingBottom={8}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.0915878312962!2d-70.79251248548317!3d-33.52500430872714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dd47082016a7%3A0x5c1c10a879bdb28d!2sNueva%20San%20Mart%C3%ADn%202324%2C%20Maip%C3%BA%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1610325247304!5m2!1ses-419!2scl" className={classes.maps}></iframe>
            </Box>
            <Grid container direction="column" >
                <Grid item container>
                    <Grid item xs={12} sm={4}>
                        <Typography color="textSecondary" align='center' >
                            <Box fontWeight="fontWeightBold" fontSize="h6.fontSize">
                                DIRECCION
                            </Box>
                            <hr className={classes.hrContactDown}></hr>
                            <Box fontWeight="fontWeightLight">
                                Avda. Nueva San Martín 2324 Maipú Santiago de Chile
                            </Box>
                            <Box fontWeight="fontWeightLight" marginBottom={4}>
                                Maipú Santiago de Chile
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography color="textSecondary" align='center' >
                            <Box fontWeight="fontWeightBold" fontSize="h6.fontSize">
                                HORARIOS
                            </Box>
                            <hr className={classes.hrContactDown}></hr>
                            <Box fontWeight="fontWeightLight">
                                Lunes a Viernes: 08:30 - 18:00 horas
                            </Box>
                            <Box fontWeight="fontWeightLight" marginBottom={4}>
                                Sábado: 09:00 - 17:00 horas
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography color="textSecondary" align='center' >
                            <Box fontWeight="fontWeightBold" fontSize="h6.fontSize">
                                VENTAS
                            </Box>
                            <hr className={classes.hrContactDown}></hr>
                            <Box fontWeight="fontWeightLight" >
                                (+56 9) 9 7758 0977 / 9 3427 8049
                            </Box>
                            <Box fontWeight="fontWeightLight" marginBottom={4}>
                                ventas@naturalagua.cl
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="column">
                <Grid item container>
                    <Grid item xs={12} sm={12} >
                        <Typography color="textSecondary" align='center'>
                            <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" paddingTop={8} paddingBottom={2}>
                                COTICE, HAGA SU PEDIDO O CONSULTE
                            </Box>
                            <form className={classes.form} noValidate autoComplete="off" paddingBottom={8}>
                                <TextField id="outlined-basic" className={classes.text} label="Nombre" variant="outlined" color="secondary" />
                                <TextField id="outlined-basic" className={classes.text} label="Email" variant="outlined" color="secondary" />
                                <TextField id="outlined-basic" className={classes.text} label="Mensaje" variant="outlined" color="secondary" multiline rows={4} />
                            </form>
                            <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" paddingTop={4} paddingBottom={4}>
                                <Button variant="contained" size="large" color="secondary" >ENVIAR</Button>
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    );
}

export default Contact