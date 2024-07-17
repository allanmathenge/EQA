import React from 'react'
import Hero from './Hero'
import Mission from './Mission'
import Reviews2 from './Reviews2'
import Nav from './Nav'
import FreshlyFooter from "../components/footer/FreshlyFooter";
import Contact from "./Contact";
import Faq from './Faq'
function Home() {
  return (
    <div className="">
        <Nav />

     <Hero />
     <Mission />
     <Reviews2 />
     <Faq />
     {/* <Contact /> */}  
    <FreshlyFooter />
     </div>
  )
}

export default Home