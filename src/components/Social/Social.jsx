import { makeStyles } from '@material-ui/core/styles';
import { Box, IconButton, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    divSocial: {
        backgroundColor: '#333333',
        paddingTop: '10px',
        paddingBottom: '10px'
    }
}));

const Social = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.divSocial}>
            <Box align='center'>
                <IconButton aria-label="facebook" color='secondary'>
                    <FacebookIcon />
                </IconButton>
                <IconButton aria-label="instagram" color='secondary'>
                    <InstagramIcon />
                </IconButton>
                <IconButton aria-label="linkedin" color='secondary'>
                    <LinkedInIcon />
                </IconButton>
            </Box>
            <Typography color="textSecondary" align='center' >
                <Box fontWeight="fontWeightLight">
                    © 2019 Agua Purificada Natural / Avda. Nueva San Martín 2324, Maipú, Santiago de Chile
                </Box>
            </Typography>
        </div>
    );
}

export default Social