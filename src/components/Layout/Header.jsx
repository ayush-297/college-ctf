import React, {useState} from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import Logo from '../Logo';
import {Link} from 'react-router-dom';
import '../../styles/headerstyles.css'
import MenuIcon from '@mui/icons-material/Menu';
import drawerlogo from '../../assets/output-onlinepngtools.png'
// import '../../styles/headerstyles.css'
const Header = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  }

  const drawer = (
      <Box className="Drawer" onClick={handleDrawerOpen} sx={{textAlign: 'center', width:"100%", height:"100%"}}>
          <img src={drawerlogo} alt="drawerlogo"/>
          <Typography color='black' variant='h6' component="div" sx={{flexGrow : 1, my:2 } }>
            CTF_WEBSITE
          </Typography>
          <Divider></Divider>
            <ul className='drawer-navigation'>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li >
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
              <li>
                <Link to={'/events'}>Events</Link>
              </li>
              <li>
                <Link to={'/challenges'}>Challenges</Link>
              </li>
            </ul>
      </Box>
  )
  return (
    <>
    <Box>
      <AppBar component={'nav'} sx={ {bgcolor: "#e91e63"}}>
        <Toolbar>
          <IconButton color='black' 
          aria-label="open drawer" 
          edge="start" 
          sx={{mr: 2, 
          display: {sm: "none"}
          }}
          onClick={handleDrawerOpen}
          >

            <MenuIcon></MenuIcon>
          </IconButton>
        <Logo></Logo>
        <Typography color='black' variant='h6' component="div" sx={{flexGrow : 1} }>
        <Link to={'/'} style={{color: 'black',textDecoration:'none'}}>CTF_WEBSITE</Link>
        </Typography>
        <Box sx={{display: {xs:'none',sm:"block"}}}>
          <ul className='navigation-menu'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
            <li>
              <Link to={'/events'}>Events</Link>
            </li>
            <li>
                <Link to={'/challenges'}>Challenges</Link>
              </li>
          </ul>
        </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer varient='temporary' open={drawerOpen} 
        onClose={handleDrawerOpen}
        sx={{display:{sx: "block", sm:"none"}, "& .MuiDrawer-paper": {
          boxsizing: "border-box",
          width: "240px",
        },
        }}>
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <Toolbar />
      </Box>
    </Box>
    </>
  )
}

export default Header