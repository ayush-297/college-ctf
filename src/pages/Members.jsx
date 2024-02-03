import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, IconButton } from '@mui/material'
import { MemList } from '../Data/Data'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Members = () => {
  return (
    <Layout>
        <Box sx={{ bgcolor: "black" ,display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          {
            MemList.map(mem => (
              <Card sx={{maxWidth:'390px', display: "flex", m:3}}>
                <CardActionArea>
                  <CardMedia sx={{minHeight: "400px"}} component={'img'} src={mem.image} alt={mem.name}/>
                  <CardContent>
                  <Typography sx={{fontFamily:"cursive"}} variant='h5' gutterBottom component={'codename'}>
                      "{mem.codename}"
                    </Typography>
                    <Typography sx={{fontFamily:"monospace", fontSize:"20px"}} variant='h8' gutterBottom component={'div'}>
                      {mem.name}
                    </Typography>
                    <IconButton href={mem.linkedin} target="_blank"  color='primary'><LinkedInIcon/></IconButton>
                    <IconButton color='inherit' href={mem.github}
                    target="_blank" ><GitHubIcon/></IconButton>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          }
        </Box>
    </Layout>
    
  )
}

export default Members