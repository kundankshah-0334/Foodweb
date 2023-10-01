import React from 'react'
import { useCart , useDispatchCart } from '../component/ContextReducer'
import {Link} from "react-router-dom"

function Cart() {

    const data = useCart();
    const dispatch = useDispatchCart();
     if(data.length ===  0){
        return (
            <div className='m-5 w-100 text-center fs-3'>Cart is Empty</div>
        )
     }
     
     const handleCkeckOut = async () => {
         let UserEmail = localStorage.getItem('userEmail');
         console.log(UserEmail);
         const responce = await fetch("http://localhost:8000/api/orderData", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: UserEmail,
                    order_data : data,
                    order_date : new Date().toDateString()
                    
                })
                
            });

            console.log('Sending request with data:', {
                email: UserEmail,
                order_data: data,
                order_date: new Date().toDateString(),
            });


            console.log('order Responce ' , responce) ;
            if(responce.status === 200){
                dispatch({
                    type : "DROP"
                })
            }
        }
        let totalPrice = data.reduce((total , food) => total+food.price , 0);
    return (
        <>
        <div className='container mt-1 p-4'>
                  <table className="table">
                <thead>
                    <tr className='text-success'>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Option</th>
                        <th scope="col">Amount</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
               
                    {
                        data.map((food , index) => {
                            return (
                                <>
                                <tr>
                                <th scope="row">{index+1}</th>
                                <td>{food.name}</td>
                                <td>{food.qty}</td>
                                <td>{food.size}</td>
                                <td>{food.price}</td>
                                <td><button type='button' className='btn btn-danger p-0' onClick={() => {dispatch({type : "REMOVE" , index: index})}}>Delete</button></td>
                                </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
                <div className='fs-3 mt-1'> Total Price = ₹ {totalPrice} /-</div>
            </div>
            <div className="">
            <Link className='btn btn-success ms-4 text-white' onClick={handleCkeckOut}> Check Out</Link>

            </div>
  
        </>
    )
}

export default Cart
