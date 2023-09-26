import React from 'react'
import { Link } from "react-router-dom"

function Carousal() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit : "contain !important"}}>
                <div className="carousel-inner" id='carousal'>
                <div className="carousel-caption d-none d-md-block" style={{zIndex:"3"}}>
                <form className="d-flex" >
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-success" type="submit">Search</button>
                </form>
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
    )
}

export default Carousal
