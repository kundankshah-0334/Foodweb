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
      <div className='row mt-3'>
        <div className='col-4'>
        <Card />
        </div>
        <div className='col-4'>
        <Card />
        </div>
        <div className='col-4'>
        <Card />
        </div>

      </div>
      <div className='mt-5'>
      <Footer />

      </div>
    </div>
  )
}

export default Home
