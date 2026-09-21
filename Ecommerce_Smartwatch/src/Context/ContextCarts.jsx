import {useState, useContext, createContext} from 'react'

const CartContext = createContext();
export const CartProvider =({children})=>{
    const [carts, setCarts]= useState([]);
    const addToCarts = (product)=>{
        setCarts((currentCarts)=>{
            const existing = currentCarts.find((item)=>{
               return item.id === product.id
            })

            if(existing){
                return currentCarts.map((item)=>
                    item.id === product.id ? {...item ,quantity:item.quantity +1}:item
                )
            }
            return [...currentCarts, {...product,quantity:1}];
        })
    }

    const removedFromCarts =(product)=>(
        setCarts((currentCarts)=>currentCarts.filter(
            (item)=>item.id !== product.id       
        )));

    const increaseQuantity = (product)=>{
        setCarts((currentCarts)=>currentCarts.map((item)=>
            item.id === product.id ? {...item, quantity:item.quantity+ 1}:item
        ));
    };
    const decreaseQuantity = (product)=>{
        setCarts((currentCarts)=>currentCarts.map((item)=>
            item.id === product.id ? {...item, quantity:item.quantity -1}:item
        ).filter((item)=>item.quantity>0))
    };
    const clearCarts=()=>{
        setCarts([])
    };

    const totalItem = carts.reduce((total,item)=>total +item.quantity,0);
    const totalPrice = carts.reduce((total,item)=> total + item.price*item.quantity,0);

    const value = {carts, setCarts , addToCarts,clearCarts, removedFromCarts, increaseQuantity,decreaseQuantity ,totalItem,totalPrice};

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart =()=> useContext(CartContext);