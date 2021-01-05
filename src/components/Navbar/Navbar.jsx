import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Grid, Menu, MenuItem, Toolbar } from "@material-ui/core";
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 60,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
  },
  appBarTransparent: {
    background: 'transparent'
  },
  appBarSolid: {
    backgroundColor: 'rgba(60,60,60)'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flex: 1,
      justifyContent: "flex-end"
    },
  },
  sectionMobile: {
    display: 'flex',
    flex: 1,
    justifyContent: "flex-end",
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState('appBarTransparent')
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const navRef = React.useRef()

  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (show) {
        setNavBackground('appBarSolid')
      } else {
        setNavBackground('appBarTransparent')
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p>Quiénes somos</p>
      </MenuItem>
      <MenuItem>
        <p>Productos</p>
      </MenuItem>
      <MenuItem>
        <p>Planes</p>
      </MenuItem>
      <MenuItem>
        <p>Clientes</p>
      </MenuItem>
      <MenuItem>
        <p>Contacto</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar className={classes[navRef.current]} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.sectionDesktop}>
            <Grid container justify="flex-end" spacing={7}>
              <Grid key={1} item>
                <Button color="inherit">QUIÉNES SOMOS</Button>
              </Grid>
              <Grid key={2} item>
                <Button color="inherit">PRODUCTOS</Button>
              </Grid>
              <Grid key={3} item>
                <Button color="inherit">PLANES</Button>
              </Grid>
              <Grid key={4} item>
                <Button color="inherit">CLIENTES</Button>
              </Grid>
              <Grid key={5} item>
                <Button color="inherit">CONTACTO</Button>
              </Grid>
            </Grid>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
