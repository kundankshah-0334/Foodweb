import React from 'react'
import { useCart , useDispatchCart } from '../component/ContextReducer'

function Cart() {

    const data = useCart();
    const dispatch = useDispatchCart();
     if(data.length ===  0){
        return (
            <div className='m-5 w-100 text-center fs-3'>Cart is Empty</div>
        )
     }
     let totalPrice = data.reduce((total , food) => total+food.price , 0)
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
  
        </>
    )
}

export default Cart
