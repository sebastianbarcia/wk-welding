import { createContext, useState, useEffect } from "react";

const CartContext = createContext()

const CartProvider = ( {children} ) => {
    
    const [cartListItems, setCartListsItems] = useState([]);
    

    const addProductToCart = ( product ) => {
                 
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id);

        if(!isInCart){
            setCartListsItems(cartListItems => [...cartListItems, product])
            const addOrderLocalStorage = ([...cartListItems, product])
            let orderJSON = JSON.stringify(addOrderLocalStorage);
            localStorage.setItem("order", orderJSON); 
            
        }else{
            isInCart.quantity++ 
            isInCart.stock--
            let orderJSON = JSON.stringify(cartListItems);
            localStorage.setItem("order", orderJSON); 
        }
    }
      
    useEffect (() => { 
        
    if(cartListItems.length === 0 && (localStorage.getItem("order") !== null)) {
        let bringOrder = JSON.parse( localStorage.getItem("order"))    
         setCartListsItems(bringOrder)
    }
     }, [])
    const deleteItemCart = (product) =>{
        let outOfCart = cartListItems.filter(cartItem => cartItem.id !== product);
        setCartListsItems(outOfCart)
       
        let orderJSON = JSON.stringify(outOfCart);
        localStorage.setItem("order",orderJSON); 
    } 

    const data = {
        cartListItems,
        addProductToCart,
        deleteItemCart,
    }
   
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}