import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  iconMenu: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  email: {
    float: "right",
    padding: 8,
  },
  appBarTransparent: {
    background: 'transparent'
  },
  appBarSolid: {
    backgroundColor: 'rgba(67, 129, 168)'
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
      <Toolbar>
        <MailIcon className={classes.iconMenu}></MailIcon>
        <Typography variant="h6" className={classes.title}>
          Movistar Correos
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
