import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";

const CartContexts = createContext([]);

export const CartContext = () => useContext(CartContexts);


const ProviderCart = ({children}) => {

    const [carritoProds, setCarritoProds] = useState([]);

    const [carritoPrecio, setCarritoPrecio] = useState(0);
    const [carritoTotal, setCarritoTotal] = useState(0);


    const addToCart = (item, contador) => {

        const index = carritoProds.findIndex((i) => i.item.id === item.id);


        if (index > -1) {
    
            toast.error(`El Producto ${item.title} ya esta en el Carrito!`);

    
        } else {
    
            toast.success(`${contador} ${item.title} Agregado/s al Carrito!`);

           setCarritoProds([...carritoProds, { item, contador }])
        }
    }

    console.log(carritoProds)


    const removeToCart = (id) => {
        const items = carritoProds.filter((i) => i.item.id !== id);
    setCarritoProds(items);
       
    }

    const clearCart = () => {
        setCarritoProds([]);
        console.log('Has Limpiado el Carrito')
    }
   

    return (
        <CartContexts.Provider value={{carritoProds, carritoTotal, carritoPrecio, addToCart, removeToCart,clearCart}}>
            {children}
        </CartContexts.Provider>
    )
}

export default ProviderCart;