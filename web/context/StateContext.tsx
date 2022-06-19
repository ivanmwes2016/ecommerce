import { create } from 'domain';
import React, { Children, createContext, useContext, useState } from 'react'
import {toast} from 'react-hot-toast'


export interface IContext{
    showCart:boolean,
    cartItems:any[],
    totalPrice:number,
    totalQuantities:number,
    qty:number,
    incQty: () => void,
    decQty: () => void
    onAdd: (product:any, quantity:number) => void
}
const Context = createContext<IContext|null>(null);


const StateContext = ({children}:any) => {
    const [showCart, setShowCart] = useState<boolean>(false)
    const [cartItems, setCartItems] = useState<any>([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)

    const onAdd = (product:any, quantity:number) => {
        const checkProductInCart = cartItems.find((item:any) => item._id === product._id)
        if(checkProductInCart){
            setTotalPrice(prevPrice => prevPrice + product.price * quantity)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity)

            const updatedCartItems:any = cartItems.map((cartProduct:any) => {
                if(cartProduct._id == product.id) return{
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updatedCartItems)
            toast.success(`${qty} ${product.name} is added to the cart`)
        } else{
            product.quantity = quantity
            setCartItems([...cartItems, { ...product }])
        }


    }

    const incQty = () => {
        setQty((prev) => prev + 1)
    }

    const decQty = () => {
        setQty((prev) => {
            if(prev - 1 < 1) return 1
            return prev -1
        })
    }

    return (
        <Context.Provider //global state
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                onAdd
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default StateContext

export const useStateContext = () => useContext(Context)
