import React from 'react'
import { useCart , useDispatchCart } from '../component/ContextReducer'

function Cart() {

    const data = useCart();
    const dispatch = useDispatchCart();
     if(data.lenght ===  0){
        return (
            <div className='m-5 w-100 text-center fs-3'>Cart is Empty</div>
        )
     }
     let totalPrice = data.reduce((total , food) => total+food.price , 0)
    return (
        <>
        <div className='container mt-5 p-4'>
                  <table class="table text-success fs-5">
                <thead>
                    <tr>
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
                                <td><button type='button' className='btn btn-danger'>Delete</button></td>
                                </tr>
                                </>
                            )
                        })
                    }
             
                 
                
                     
                </tbody>
            </table>
            </div>
  
        </>
    )
}

export default Cart
