import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Card from '../component/Card'
import Carousal from '../component/Carousal'
function Home() {
  return (
    <div>
      <Navbar />
      <Carousal />
      <Card />
      <Footer />
    </div>
  )
}

export default Home
