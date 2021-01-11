import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    divBriefcase: {
        paddingTop: '100px',
        paddingBottom: '100px',
    },
    hr: {
        height: "3px",
        width: "70px",
        background: "#6aaf08",
        border: "0",
        marginTop: "20px",
        marginBottom: "20px"
    },
}));

const Briefcase = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.divBriefcase}>
            <Typography color="textSecondary" align='center' >
                <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                    Planes
                </Box>
                <hr className={classes.hr} ></hr>
                <Box fontWeight="fontWeightRegular" marginBottom={8}>
                    Variados y convenientes a la medida de nuestro consumidor
                </Box>
            </Typography>
        </div>
    );
}

export default Briefcase