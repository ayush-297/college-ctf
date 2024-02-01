import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MemList } from '../Data/Data'


const Members = () => {
  return (
    <Layout>
        <Box sx={{ bgcolor: "black" ,display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          {
            MemList.map(mem => (
              <Card sx={{maxWidth:'390px', display: "flex", m:2}}>
                <CardActionArea>
                  <CardMedia sx={{minHeight: "400px"}} component={'img'} src={mem.image} alt={mem.name}/>
                  <CardContent>
                    <Typography variant='h5' gutterBottom component={'div'}>
                      {mem.name}
                    </Typography>
                    <Typography variant="body2">{mem.description}</Typography>
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