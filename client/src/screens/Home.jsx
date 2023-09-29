import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Card from '../component/Card'
// import Carousal from '../component/Carousal'
function Home() {
  const [search , setSearch] = useState('');
  const [foodCat , setFoodCat] = useState([]);
  const [foodData , setFoodData] = useState([]);
  const loadData = async () =>{
    let responce = await fetch("http://localhost:8000/api/foodData" ,{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      }
    });
    responce = await responce.json();

   setFoodCat(responce[1]);
   setFoodData(responce[0]);

  //  console.log(foodCat);
  //  console.log(foodData);
   console.log(search);
    // console.log(responce[0] , responce[1]);

  }
  useEffect(() => {
    loadData()
  } , []);
  return (
    <div>
      <Navbar />
      <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit : "contain !important"}}>
                <div className="carousel-inner" id='carousal'>
                <div className="carousel-caption d-none d-md-block" style={{zIndex:"3"}}>
                <div className="d-flex justify-content-center" >
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name='srerch' value={search} onChange={(e) => {setSearch(e.target.value)}} />
                    {/* <button className="btn btn-success" type="submit">Search</button> */}
                </div>
                </div>
                    <div className="carousel-item active">
                        <img className="d-block h-40 w-100" src="https://source.unsplash.com/random/900×700/?Pizza" style={{filter: "brightness(55%)"}} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block h-40 w-100" src="https://source.unsplash.com/random/900×700/?burger" style={{filter: "brightness(55%)"}} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?biryani" style={{filter: "brightness(55%)"}} alt="Third slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
      </div>
      <div className='container'>
      {
        foodCat.length > 0
          ? foodCat.map((data) => {
              return (
                <div className='row mt-3'>
                <div className='fs-3'>
                {data.CategoryName}
                </div>
                <hr />
                {foodData.length > 0 
                ? foodData.filter((filterData) => (filterData.CategoryName === data.CategoryName) && (filterData.name.toLowerCase().includes(search.toLocaleLowerCase()) ))
                .map(filteredData => {
                  return (
                      <div key={filteredData._id} className='col-lg-3  mb-3 mb-sm-0 col-md-4 col-sm-12 '>
                        <Card foodItem = {filteredData}
                          options={filteredData.options[0]}
                        />
                      </div>

                  )
                })
                : 
                <div>No Matches Found</div>}
                </div>
              ) 
            })
          : <div>Data not Found</div>
      }
      </div>
      <div className='mt-5'>
      <Footer />

      </div>
    </div>
  )
}

export default Home
