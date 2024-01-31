import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign: 'center', bgcolor:"#1A1A19", color:'white',p:3}}>
        <Box sx={{my:3, "& svg":{
            fontSize: "60px",
            cursor: "pointer",
            mr:2,
            },
            "& svg:hover":{
                color: '#1769aa',
                transform: 'translateX(5px)',
                transition: 'all 500ms',
            }
        }}>
            <InstagramIcon />
            <XIcon/>
            <LinkedInIcon/>
            <FacebookIcon/>
        </Box>
        <Typography varient="h5" sx={{"@media (max-width:600px)": {
            fontSize: "1rem",
        },
        }}>
            All Rights Reserved &copy; Z3R0_LOGON
        </Typography>
    </Box>
    </>
  )
}

export default Footer