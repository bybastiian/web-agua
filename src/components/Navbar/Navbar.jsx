import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Box, Button, Grid, Toolbar } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  iconMenu: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
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
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState('appBarTransparent')
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

  return (
    <AppBar position="fixed" className={classes[navRef.current]} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.grow} />
        <Button color="inherit">QUIÉNES SOMOS</Button>
        <Button color="inherit">PRODUCTOS</Button>
        <Button color="inherit">PLANES</Button>
        <Button color="inherit">CLIENTES</Button>
        <Button color="inherit">CONTACTO</Button>
      </Toolbar>
    </AppBar>
  );
}
