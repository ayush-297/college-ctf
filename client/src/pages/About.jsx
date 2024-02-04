import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'





const About = () => {
  return (
    <Box sx={{bgcolor:"black"}}>
    <Layout>
      
        <Box sx={{
          my: 15,
          textAlign: "center",
          p:2,
          "& h4":{
            fontWeight: 'bold',
            my:2,
            fontSize: "2rem"
          },
          "& p":{
            margin: "10px",
            color: "green",
            textAlign: 'justify',
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            }
          }
        }}>
          <Typography variant="h4" color="#ff004e">
            Welcome to the Slay_Ctf
          </Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi soluta cupiditate sed, placeat similique numquam fuga laudantium sit ab excepturi amet obcaecati sunt magni libero? Eveniet incidunt minima sit velit voluptatibus magni libero aperiam unde ratione! Veritatis voluptates molestiae ea tenetur facere? Impedit commodi distinctio obcaecati. Mollitia ipsam nam quis sequi aliquam, eaque ea tempora delectus a officiis quasi et nisi placeat quisquam maxime nostrum adipisci, doloremque cum debitis inventore repudiandae quia eius! Iure, soluta. Dolor hic deserunt earum? Nihil tenetur voluptatem magni minima accusamus, nulla, harum itaque similique hic nemo nesciunt quidem ut. Neque aliquid ipsum repellendus pariatur ex!
          </p>
          <br/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ab modi, est consequuntur laborum culpa. Unde excepturi doloribus est, odit sequi vel vitae odio assumenda eius, neque deleniti? Molestiae temporibus veritatis dolore voluptatem voluptas quisquam magni nesciunt, eligendi odit qui nisi aspernatur quod dignissimos libero laboriosam animi neque adipisci eius reprehenderit delectus rem fugiat? Doloribus aliquam earum sit quasi voluptate, dignissimos corporis magnam ad possimus enim facere, fugit animi nostrum eius sequi nulla doloremque saepe illo illum distinctio error ipsam, assumenda delectus similique. Nesciunt, quidem perspiciatis? Saepe doloribus, voluptates expedita sequi, quod, ad deleniti dicta quibusdam molestiae ex excepturi suscipit.</p>

        </Box>
        
    </Layout>
    </Box>
  )
}

export default About