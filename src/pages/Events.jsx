import React from 'react'
import Layout from '../components/Layout/Layout'
import { Typography } from '@mui/material'
import '../styles/events.css'
const Events = () => {
  return (
    <Layout>
           <section id="timeline">
  
  <div className="tl-item">
    
    <div className="tl-bg" ></div>
    
    <div className="tl-year">
      <p className="f2 heading--sanSerif">Registration</p>
    </div>

    <div className="tl-content">
      <h1>4TH-15TH FEBRUARY</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
    </div>

  </div>

  <div className="tl-item">
    
    <div className="tl-bg" ></div>
    
    <div className="tl-year">
      <p>Workshop</p>
    </div>

    <div className="tl-content">
      <h1 className="f3 text--accent ttu">17TH FEB - 10:30 AM</h1>
      <p>Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas. Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed felis. Morbi sed nisl et arcu.</p>
    </div>

  </div>

  <div className="tl-item">
    
    <div className="tl-bg" ></div>
    
    <div className="tl-year">
      <p className=" heading--sanSerif">CTF</p>
    </div>

    <div className="tl-content">
      <h1 className="f3 text--accent ttu">17TH FEB - 2:00 PM</h1>
      <p>Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium sed.</p>
    </div>

  </div>

  <div className="tl-item">
    
    <div className="tl-bg" ></div>
    
    <div className="tl-year">
      <p className="f2 heading--sanSerif">Validictory<br/>Mentions</p>
    </div>

    <div className="tl-content">
      <h1 className="f3 text--accent ttu">17TH FEB - 5:30 PM</h1>
      <p>Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare purus non euismod. Donec vestibulum efficitur tortor, eget efficitur enim facilisis consequat. Vivamus laoreet laoreet elit. Ut ut varius metus, bibendum imperdiet ex. Curabitur diam quam, blandit at risus nec, pulvinar porttitor lorem. Pellentesque dolor elit.</p>
    </div>

  </div>
</section>

</Layout>
  )
}

export default Events