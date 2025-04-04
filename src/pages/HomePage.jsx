import React from 'react'
import { Navbar } from '../comps/Navbar'
import Footer from '../comps/Footer'
import HeroComp from '../comps/HeroComp'
import Service from '../comps/Srvice'
const HomePage = () => {
  return (
    <div className='w-screen'>
      <Navbar />

      {/** Main Body Contents */}
      <HeroComp/>
      <Service/>
      {/** End of Main Body Contents */}

      <Footer/>
    </div>
  )
}

export default HomePage
