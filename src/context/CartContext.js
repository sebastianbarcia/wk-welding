import { createContext, useState, useEffect } from "react";

const CartContext = createContext()

const CartProvider = ( {children} ) => {
    
    const [cartListItems, setCartListsItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    
    const addProductToCart = ( product ) => {

        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id);
        
        if(!isInCart){
            setCartListsItems(cartListItems => [...cartListItems, product])
            const addOrderLocalStorage = ([...cartListItems, product])
            
            let orderJSON = JSON.stringify(addOrderLocalStorage);
            localStorage.setItem("order", orderJSON);

            const priceSet = totalPrice + (Number(product.price) * product.quantity)
            setTotalPrice(priceSet)
            localStorage.setItem("account" , priceSet)   

        }else{
            isInCart.quantity = isInCart.quantity + product.quantity
            isInCart.stock = isInCart.stock - product.quantity
            let orderJSON = JSON.stringify(cartListItems);
            localStorage.setItem("order", orderJSON);  
            
            const priceSet = totalPrice + (Number(product.price) * product.quantity)
            setTotalPrice(priceSet)
            localStorage.setItem("account" , priceSet)  
        }    
    }

    const deleteItemCart = (product) =>{
        let outOfCart = cartListItems.filter(cartItem => cartItem.id !== product);
        setCartListsItems(outOfCart)
        
        let orderJSON = JSON.stringify(outOfCart);
        localStorage.setItem("order",orderJSON); 
        
        let inCart = cartListItems.find(cartItem => cartItem.id === product);
        
        const priceSet = totalPrice - (inCart.price * inCart.quantity)
        setTotalPrice(priceSet)
        
        localStorage.setItem("account" , priceSet)   
    } 
    
    const clearOrder = () =>{
        setCartListsItems([])
        setTotalPrice(0)
    }

    useEffect (() => { 
       
    if(cartListItems.length === 0 && (localStorage.getItem("order") !== null)) {
        let bringOrder = JSON.parse( localStorage.getItem("order"))    
        setCartListsItems(bringOrder)   
    } 
    if(localStorage.getItem("account") !== null ){
        let bringAccount = JSON.parse( localStorage.getItem("account")) 
        setTotalPrice(bringAccount)
    }
     }, [])

    const data = {
        cartListItems,
        addProductToCart,
        deleteItemCart,
        totalPrice,
        clearOrder
    }
   
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}