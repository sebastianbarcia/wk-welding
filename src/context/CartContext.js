import { createContext, useState, useEffect } from "react";

//Context creation
const CartContext = createContext()

const CartProvider = ( {children} ) => {
    
    //useState to define items to add in cart and calculate the price
    const [cartListItems, setCartListsItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    /* Function to add products to the shopping cart. Creation of local storage to keep products active
    chosen when we return to the site */  
    const addProductToCart = ( product ) => {
        
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id);
        
        if(!isInCart){
          
            product.stock = product.stock - product.quantity;
            setCartListsItems(cartListItems => [...cartListItems, product])

            const orderProduct = [...cartListItems, product]
            let orderJSON = JSON.stringify(orderProduct);
            localStorage.setItem("order", orderJSON);  

            const priceSet = totalPrice + (Number(product.price) * product.quantity);
        
            setTotalPrice(priceSet);
            localStorage.setItem("account" , priceSet);     
        
        }else{
          
            isInCart.quantity = isInCart.quantity + product.quantity;
            isInCart.stock = isInCart.stock - product.quantity;
            
            let orderJSON = JSON.stringify(cartListItems);
            localStorage.setItem("order", orderJSON);  
            
            const priceSet = totalPrice + (Number(product.price) * product.quantity);
            setTotalPrice(priceSet);
            localStorage.setItem("account" , priceSet);  
        }
        
    }
    //Add to the local storage the additional item in "welders"
    if(cartListItems.length > 1){
        localStorage.setItem("order", JSON.stringify( cartListItems))
        // Count to add all the items in the cart component  
        const plusLocal = cartListItems.map(item => Number(item.price)*item.quantity ).reduce((prev, curr) => prev + curr, 0);
        localStorage.setItem("account",plusLocal) 
    }
    
    //Delete items from cart and local storage
    const deleteItemCart = (product) =>{
        let outOfCart = cartListItems.filter(cartItem => cartItem.id !== product);
        setCartListsItems(outOfCart)
        
        let orderJSON = JSON.stringify(outOfCart);
        localStorage.setItem("order",orderJSON); 
        
        let inCart = cartListItems.find(cartItem => cartItem.id === product);
       
        let bringPrice = JSON.parse(localStorage.getItem("account"))  
        const priceSet = bringPrice - (inCart.price * inCart.quantity)

        localStorage.setItem("account",priceSet) 
        setTotalPrice(priceSet)   
    } 
    
    const clearOrder = () =>{
        //To return to 0 the cart and the total amount
        setCartListsItems([])
        setTotalPrice(0)
    }

    useEffect (() => { 
    //Local storage load when site loads   
        if(cartListItems.length >= 1) {
            localStorage.setItem("order", JSON.stringify(cartListItems));
                       
            const plusLocal = cartListItems.map(item => Number(item.price)*item.quantity ).reduce((prev, curr) => prev + curr, 0);
            localStorage.setItem("account",plusLocal)
            }
        if(localStorage.getItem("account") !== null ){
            let bringOrder = JSON.parse( localStorage.getItem("order"))   
            setCartListsItems(bringOrder)   
            let bringAccount = JSON.parse( localStorage.getItem("account")) 
            setTotalPrice(bringAccount)
            }
    }, [])

    // Constant to define functions and constants to be used in child components
    const data = {
        cartListItems,
        addProductToCart,
        deleteItemCart,
        clearOrder,
    }
   
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}