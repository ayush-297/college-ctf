import React from 'react'
import Layout from '../components/Layout/Layout'
import { Typography } from '@mui/material'

const Events = () => {
  return (
    <div>
        <Layout>
            <Typography variant='h2' sx={{display: "flex", justifyContent: "center", height: "600px", alignItems: "center", color:"green" , background: "black"}}>
                Events coming sooon!!
            </Typography>
        </Layout>
    </div>
  )
}

export default Events