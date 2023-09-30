import React, { useState ,useEffect, useRef } from 'react';
import { useCart, useDispatchCart } from './ContextReducer';

function Card(p) {

  
    const priceRef = useRef();

    let dispatch = useDispatchCart();
    let data = useCart();

    let options = p.options;
    let pOptions = Object.keys(options);
    const [qty , setQty] = useState(1);
    const [size , setSize] = useState(pOptions[0]);

    let finalPrice = qty * parseInt(options[size])
    useEffect(() => {
        // console.log(data)
        setSize(priceRef.current.value) // Log the updafoodItemlet foodItem = props.item;ted data whenever it changes
    }, []);
    useEffect(() => {
        // console.log(data);
        // setSize(priceRef.current.value) // Log the updated data whenever it changes
    }, [data]);

    const handleAddToCart = async () => {

        let food = [];
        for(const item of data){
            if(item.id === p.foodItem._id){
                food = [];
                food = item;
                console.log(item)
                // console.log(p.foodItem._id);
                // console.log(item.id);

                break;
            }
        }


        if(food.length !== 0) {
            console.log(food)
            if(food.size === size){
                console.log(qty);
                console.log(food.size);
                console.log(p.foodItem._id);
                await dispatch({type:"UPDATE" , id:p.foodItem._id , price:finalPrice ,qty : qty})
                console.log("Food is not empty");
                return
            } 
            else if(food.size !== size){
                await dispatch ({
                    type: "ADD",
                    id : p.foodItem._id,
                    name : p.foodItem.name,
                    price : finalPrice,
                    img : p.foodItem.img,
                    qty : qty,
                    size  : size,
                })
                return
            }
            return
        }
        // }

        await dispatch ({
            type: "ADD",
            id : p.foodItem._id,
            name : p.foodItem.name,
            price : finalPrice,
            img : p.foodItem.img,
            qty : qty,
            size  : size,
        })
        // console.log(data);
    }
    return (
        <div className='' id='cont-card'>
            <div className="card   mt-4 ms-0" id='card-main' style={{ "width": "17rem", "maxHeight": "450px" }}>  {/* //, "maxHeight": "360px" */}
                <img id='card-img-z' src={p.foodItem.img} style={{ filter: "brightness(100%)", "height": "200px" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{p.foodItem.name}</h5>
                    {/* <p className="card-text">Some quick example of the card's content.</p> */}
                    <div className=''> 
                        <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select>
                        <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {
                                pOptions.map((data) => {
                                    return <option value={data} key={data}>{data}</option>
                                })
                            }
                        </select>
                        <div className='d-inline'>
                        <button className='text-white h-100 btn-secondary rounded'>₹{finalPrice}/-</button>
                        </div>
                        <hr />
                        <div className='container'>
                        <p className="btn m-2 bg-success text-white" onClick={handleAddToCart} >Add to cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card


