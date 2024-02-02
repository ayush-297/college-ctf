import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../assets/SLAY.png'
import { motion } from "framer-motion"

import '../styles/Homestyle.css'
const Home = () => {
  return (
    <Layout>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration :1,ease:'easeOut'}} className='home' style={{backgroundColor: "black"}}>
          <motion.div initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }} className='slaylogo'><img src={Banner} alt='logo'></img></motion.div>
          <motion.div animate={{x:200}} transition={{delay:0.1, duration:1}} className='headerContainer'>
            <span className="type"><span>Slay_CTF</span></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, natus? Amet veniam nesciunt repellat assumenda. Totam, ullamrkeh bekrhbvkreb kb erkjbkrejb jbkjb kjbk bkj bjk b kj bk jbkj bk bk jbjkbkjb khh volup jeknerjbvker kejrkjerbkjvb ertas! Placeat rem libero minus molestiusto adipisci consectetur amet beatae repellendus.
            </p>
            <Link to='/events'>
              <button>
                View Event
              </button>
            </Link>
          </motion.div>
        </motion.div>
    </Layout>
  )
}

export default Home