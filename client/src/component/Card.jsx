import React from 'react';

function Card(p) {
    let options = p.options;
    let pOptions = Object.keys(options);

    return (
        <div className='' id='cont-card'>
            <div className="card   mt-4 ms-0" id='card-main' style={{ "width": "17rem", "maxHeight": "360px" }}>  {/* //, "maxHeight": "360px" */}
                <img id='card-img-z' src={p.imgSrc} style={{filter: "brightness(100%)"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{p.foodName}</h5>
                    <p className="card-text">Some quick example of the card's content.</p>
                    <div className=''>
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
                        {
                            pOptions.map((data) =>{
                                return <option value={data} key={data}>{data}</option>
                            })
                        }
                            {/* <option value="half">Half</option>
                            <option value="full">Full</option> */}
                        </select>
                        <div className='d-inline'><button className='text-white h-100 btn-secondary rounded'>Total Price</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
