import React, { useContext } from "react";
import { CartContext } from "../CartContexts";

function ItemCart({item, contador}) {
    const {removeToCart } = CartContext();
    const { title, description, price, image, id} = item;
    return (
        <div>
              <h4>{title}</h4>
            <img style={{width:'60px', height:'60px'}} src={image}/>
            <h4>{contador}</h4>
            
            <button onClick={() =>removeToCart(id) }> borrar</button>
        </div>
    )
}

export default ItemCart
