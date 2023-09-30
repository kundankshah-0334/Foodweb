import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state , action) => {
    switch (action.type) {
        case "ADD":
            return [...state , {
                id:action.id,
                name:action.name,
                price:action.price,
                img:action.img,
                qty:action.qty,
                size:action.size,
            }]
            case "REMOVE": 
            let tempArr = [...state];
            tempArr.splice(action.index , 1);
            return tempArr;

            case "UPDATE":
                let arr = [...state]
                arr.find((food, index) => {
                    if (food.id === action.id) {
                        console.log(food.id)
                        console.log(food.qty, parseInt(action.qty), action.price + food.price)
                        arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                    }
                    else{
                        console.log(food)
                        console.log("SSSSSSSSSSSSSSSSSS")
                    }
                    return arr
                })
                return arr


        default:
            console.log("Error in Reducer");
    }
}

export const CartProvider = ({children}) =>{
    const [state , dispatch] = useReducer(reducer , []);
    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
              {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>

    )
};

export const useCart = ()=>useContext(CartStateContext);
export const useDispatchCart = ()=>useContext(CartDispatchContext);

