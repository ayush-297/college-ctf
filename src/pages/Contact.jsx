import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{my: 5,ml: 10,"& h4":{fontWeight: 'bold'}, mb: 2}}>
          <Typography variant="h4" color="#e91e63">
            Contact us
          </Typography>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda at quis voluptatum rerum eum earum nesciunt, neque asperiores facilis ducimus recusandae distinctio impedit, libero alias labore quae architecto molestiae quibusdam corrupti commodi nostrum pariatur aliquam est? Accusamus quia eveniet corrupti.</p>
        </Box>
        <Box sx={{m:3, width: "600px", ml:10, "@media (max-width: 600px)":{
          width:"300px",
        }}}>
          <TableContainer component={Paper}>
            <Table aria-label="Contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor: "black", color: "white"}} align="center">
                    Contact details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:'#1769aa', pt: 1}} />1234567890
                  </TableCell>
                  
                </TableRow>
                <TableRow>
                <TableCell>
                    <EmailIcon sx={{color:'#1769aa', pt: 1}} />something@something.com
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact