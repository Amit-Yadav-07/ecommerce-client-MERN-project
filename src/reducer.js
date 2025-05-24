import { REMOVE, DISPLAY_ITEMS, INCREASE, DECREASE, LOADING, CLEAR_CART, ADD_TO_CART } from "./actions";


const cartReducer = (state, action) => {

    if (action.type === CLEAR_CART) {
        localStorage.removeItem('cartItems');
        return { ...state, cart: [] }
    }

    if (action.type === REMOVE) {

        const newCart = new Map(state.cart)
        newCart.delete(action.payload.id)
        return { ...state, cart: newCart }
    }

    if (action.type === INCREASE) {
        const newCart = new Map(state.cart)
        const itemId = action.payload.id
        const item = newCart.get(itemId)
        const newItem = { ...item, amount: item.amount + 1 }
        console.log(newItem);
        newCart.set(itemId, newItem)
        return { ...state, cart: newCart }
    }


    if (action.type === DECREASE) {

        const newCart = new Map(state.cart)
        const itemId = action.payload.id
        const item = newCart.get(itemId)

        if (item.amount === 1) {
            newCart.delete(itemId)
            return { ...state, cart: newCart }
        }
        const newItem = { ...item, amount: item.amount - 1 }

        newCart.set(itemId, newItem)
        return { ...state, cart: newCart }
    }


    //    add to cart
    if (action.type === ADD_TO_CART) {
        const newCart = new Map(state.cart);
        const product = action.payload;
        console.log(product);

        if (newCart.has(product.id)) {
            const existing = newCart.get(product.id);
            newCart.set(product.id, { ...existing, amount: existing.amount + 1 });
        } else {
            newCart.set(product.id, { ...product, amount: 1 });
        }
        return { ...state, cart: newCart };
    }

    throw new Error(`no matching ${action.type}`)

};


export default cartReducer;