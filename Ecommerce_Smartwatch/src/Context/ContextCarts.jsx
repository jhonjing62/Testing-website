import {useState, useContext, createContext} from 'react'

const CartContext = createContext();
export const CartProvider =({children})=>{
    const [carts, setCarts]= useState([]);
    const addToCarts = (product)=>{
        setCarts((currentCarts)=>{
            const existing = currentCarts.find((item)=>{
                item.id === product.id
            })

            if(existing){
                return currentCarts.map((item)=>{
                    item.id === product.id ? {...item ,quantily:item.quantily +1}:item;
                })
            }
            return [...currentCarts, {...product,quantily:1}];
        })
    }

    const removedFromCarts =(product)=>{
        setCarts((currentCarts)=>currentCarts.map(
            (item)=>{
                item.id !== product.id;
            }
        ))
    };

    const increaseQuantily = (product)=>{
        setCarts((currentCarts)=>currentCarts.map((item)=>{
            item.id === product.id ? {...item, quantily:item.quantily+ 1}:item
        }))
    };
    const decreaseQuantily = (product)=>{
        setCarts((currentCarts)=>currentCarts.map((item)=>{
            item.id === product.id ? {...item, quantily:item.quantily -1}:item
        }))
    };
    const clearCarts=()=>{
        setCarts([])
    };

    const totalItem = carts.reduce((total,item)=>total + item.quantily, 0 );
    const totalPrice = carts.reduce((total,item)=> total + item.price*item.quantily, 0);

    const value = {carts, setCarts , addToCarts,clearCarts, removedFromCarts, increaseQuantily,decreaseQuantily ,totalItem,totalPrice};

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart =()=> useContext(CartContext);