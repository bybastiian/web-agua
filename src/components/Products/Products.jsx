import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import imgProduct1 from '../static/img/product-1.jpg';
import imgProduct2 from '../static/img/product-2.jpg';
import imgProduct3 from '../static/img/product-3.jpg';
import imgProduct4 from '../static/img/product-4.jpg';
import imgProduct5 from '../static/img/product-5.jpg';
import imgProduct6 from '../static/img/product-6.jpg';
import imgProduct7 from '../static/img/product-7.jpg';
import imgProduct8 from '../static/img/product-8.jpg';

const useStyles = makeStyles((theme) => ({
    divProducts: {
        backgroundColor: '#6AAF08',
        paddingTop: '100px',
        paddingBottom: '100px',
    },
    hr: {
        height: "3px",
        width: "70px",
        background: "rgba(255, 255, 255, 0.6)",
        border: "0",
        marginTop: "20px",
        marginBottom: "20px"
    },
    img: {
        position: "relative",
        width: "225px",
        height: "225px",
        borderRadius: "50%",
        border: "10px solid rgba(255,255,255,0.1)",
    },
}));

const Products = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.divProducts}>
            <Typography color="textPrimary" align='center' >
                <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                    Productos
                </Box>
                <hr className={classes.hr} ></hr>
                <Box fontWeight="fontWeightRegular" marginBottom={8}>
                    Todos de alta calidad, resitentes y garantizados
                </Box>
            </Typography>
            <Grid container direction="column" >
                <Grid item container>
                    <Grid item xs={12} sm={3}>
                        <Box align='center'>
                            <img className={classes.img} src={imgProduct1} />
                        </Box>
                        <Typography color="textPrimary" align='center' >
                            <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                                Producto 1
                                </Box>
                            <Box fontWeight="fontWeightLight" marginBottom={4}>
                                Dispensador de mesa. Valor $ 5.000
                                </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box align='center'>
                            <img className={classes.img} src={imgProduct2} />
                        </Box>
                        <Typography color="textPrimary" align='center'>
                            <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                                Producto 2
                        </Box>
                            <Box fontWeight="fontWeightLight" marginBottom={4}>
                                Dispensador de mesa. Valor $ 5.000
                        </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box align='center'>
                            <img className={classes.img} src={imgProduct3} />
                        </Box>
                        <Typography color="textPrimary" align='center'>
                            <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                                Producto 3
                        </Box>
                            <Box fontWeight="fontWeightLight" marginBottom={4} >
                                Dispensador de mesa. Valor $ 5.000
                        </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box align='center'>
                            <img className={classes.img} src={imgProduct4} />
                        </Box>
                        <Typography color="textPrimary" align='center'>
                            <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                                Producto 4
                                    </Box>
                            <Box fontWeight="fontWeightLight" marginBottom={4} >
                                Recarga bidón de 20 litros retornable Valor $ 2.500 Recarga bidón de 10 litros desechable Valor $ 2.000
                                   </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box align='center'>
                            <img className={classes.img} src={imgProduct5} />
                        </Box>
                        <Typography color="textPrimary" align='center'>
                            <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                                Producto 5
                        </Box>
                            <Box fontWeight="fontWeightLight" marginBottom={4} >
                                Máquina para agua purificada caliente y fría con pedestal, sistema de enfriamiento compresor. Valor $ 90.000
                        </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box align='center'>
                            <img className={classes.img} src={imgProduct6} />
                        </Box>
                        <Typography color="textPrimary" align='center'>
                            <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                                Producto 6
                        </Box>
                            <Box fontWeight="fontWeightLight" marginBottom={4} margin={2}>
                                Máquina para agua purificada caliente y fría, sistema de enfriamiento ventilador. Valor $ 40.000
                        </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box align='center'>
                            <img className={classes.img} src={imgProduct7} />
                        </Box>
                        <Typography color="textPrimary" align='center'>
                            <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                                Producto 7
                        </Box>
                            <Box fontWeight="fontWeightLight" marginBottom={4}  >
                                Bomba eléctrica, con carga cable usb Valor $ 7.000
                        </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box align='center'>
                            <img className={classes.img} src={imgProduct8} />
                        </Box>
                        <Typography color="textPrimary" align='center'>
                            <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                                Producto 8
                        </Box>
                            <Box fontWeight="fontWeightLight" marginBottom={4}>
                                Bomba manual. Valor $ 3.000
                        </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Products