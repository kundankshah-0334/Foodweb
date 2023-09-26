import React from 'react'

function Card() {
    return (
        <div>
            <div className="card mt-4 ms-4" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example of the card's content.</p>
                    <div className='container'>
                        <select className='m-2 h-100 bg-success rounded'>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select>
                        <select className='m-2 h-100 bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className='d-inline m-2 h-100 '><button className='text-white h-100 btn-success rounded'>Total Price</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
