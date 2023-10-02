import React, { useEffect, useState } from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState(null);

    console.log(orderData);
    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'));
        try {
            const res = await fetch("http://localhost:8000/api/myOrderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: localStorage.getItem('userEmail'),
                }),
            });
            if (res.ok) {
                const response = await res.json();
                // console.log(response.orderData.order_data)
                setOrderData(response.orderData.order_data);
            } else {
                // Handle the API error or non-200 response here
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle the fetch error here
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='container'>
                <div className='row'>
                    {orderData !== null ? (
                        orderData.map((data) => {
                            console.log(data);
                            return (
                                data.map((arrayData) => {
                                        console.log(arrayData.order_date)
                                        console.log(arrayData.name)
                                        console.log(arrayData.qty)
                                    return (
                                        <div  >
                                                    {arrayData.order_date !== null ? <div className='m-auto mt-5'>
                                                        {data = arrayData.order_date}
                                                        <hr />
                                                    </div> : "date not found"}

                                                    { arrayData.name ?
                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                {/* <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} /> */}
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>{arrayData.qty}</span>
                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                        <span className='m-1'>{}</span>
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div> : " name not found"



                                                    }

                                                </div>
                                        )
                                })

                            )
                        })
                    ) : "last"}
                </div>
            </div>

            <Footer />
        </div>
    );
}
