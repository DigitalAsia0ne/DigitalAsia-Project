import React from 'react'
import Footer from "../component/Footer.jsx"
import FAQ from "../component/FAQ.jsx"
import Price from "../component/Price.jsx"
import Testimonials from '../component/Testimonials.jsx'
import Service from '../component/Service.jsx'
import Navbar from '../component/Navbar.jsx'




function Home() {
  return (
 <>
 <Navbar />
 <Price />
 <Testimonials />
 <Service />
 <FAQ />
 <Footer/>
 </>
  )
}

export default Home
