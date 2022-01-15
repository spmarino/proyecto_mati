import React, { useContext } from "react";
import { CartContext } from "../CartContexts";
import ItemCart from "./ItemCart";


const Cart = () => {
    const {carritoProds, clearCart} = CartContext();
    if(carritoProds.length < 1){ 
        return(<h2>No tienes productos agregados</h2>)
}else{ 
    return (
        <>
        <h1>PAGINA de CART</h1>
        
        {carritoProds.map((item) => (
            <ItemCart
              key={item.item.id}
              item={item.item}
              contador={item.contador}
            />))}

        <button onClick={clearCart}> Clear</button>
        </>
    )}
}

export default Cart;