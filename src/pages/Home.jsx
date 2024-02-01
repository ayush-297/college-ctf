import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../assets/background.png'


import '../styles/Homestyle.css'
const Home = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage: `url(${Banner})`}}>
          <div className='headerContainer'>
            <span className="type"><span>Slay_CTF</span></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, natus? Amet veniam nesciunt repellat assumenda. Totam, ullamrkeh bekrhbvkreb kb erkjbkrejb jbkjb kjbk bkj bjk b kj bk jbkj bk bk jbjkbkjb khh volup jeknerjbvker kejrkjerbkjvb ertas! Placeat rem libero minus molestiusto adipisci consectetur amet beatae repellendus.
            </p>
            <Link to='/events'>
              <button>
                View Event
              </button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home