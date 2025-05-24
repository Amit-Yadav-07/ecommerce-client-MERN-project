
import cartReducer from "./reducer";
import { createContext, useContext, useReducer, useEffect } from "react";
import { REMOVE, DISPLAY_ITEMS, INCREASE, DECREASE, LOADING, CLEAR_CART, ADD_TO_CART } from "./actions";
import cartItems from "./Reducer/data";
import { getTotal } from "./utils/utils";

const getCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? new Map(JSON.parse(storedCart)) : new Map();
};


const CartContext = createContext();

const initialState = {
    loading: false,
    cart: getCartFromLocalStorage()
    // cart: new Map(cartItems.map((item) => {
    //     return [item.id, item]
    // }));
}
    
export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    const { totalAmount, totalCost } = getTotal(state.cart);

    const ClearCart = () => {
        dispatch({ type: CLEAR_CART })
    }

    const remove = (id) => {
        // console.log(id);
        dispatch({ type: REMOVE, payload: { id } })
    }

    const increase = (id) => {
        // console.log(id);
        dispatch({ type: INCREASE, payload: { id } })
    }

    const decrease = (id) => {
        dispatch({ type: DECREASE, payload: { id } })
        // console.log('decrease');
    }

    const handleAddToCart = (product) => {
        dispatch({ type: ADD_TO_CART, payload: product });
        // navigate('/cart'); // optional redirect
    };

    return (
        <CartContext.Provider value={{ ...state, ClearCart, remove, increase, decrease, totalAmount, totalCost, handleAddToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
