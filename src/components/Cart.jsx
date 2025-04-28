import React from "react";
import { FaCartPlus, FaTrashAlt } from "react-icons/fa";
import CartItem from "./CartItem";
import { useCart } from "../CartContext";


const Cart = () => {

    const { cart, ClearCart, totalCost } = useCart();
    console.log(cart);

    const cartArray = Array.from(cart.entries());

    if (cartArray.length === 0) {
        return <h2 className="text-black text-3xl text-center mt-30 font-bold">Your Cart is Currently Empty</h2>
    }

    console.log(cartArray);

    return (
        <>
            <section className="cart-container w-[80%] text-center mx-auto py-5">
                <h2 className="my-10 text-3xl font-bold p-4 text-black">Shopping Cart</h2>
                <hr className="text-black" />

                <div className="p-10 w-[85%] mx-auto">
                    <div className="md:col-span-12 bg-indigo-400 text-white p-4">

                        {cartArray.map((cartItems) => {
                            const [id, item] = cartItems;
                            {/* console.log(cartItems) */ }

                            return (
                                <div key={id}>
                                    <CartItem items={{ ...item }} />
                                    <hr />
                                </div>
                            )
                        })}

                    </div>


                    <div className="bg-indigo-400 text-white pb-4 text-3xl self-start h-[auto] font-bold">Total Cost : {`$ ${totalCost.toFixed(2)}`}</div>
                </div>
                <button className="btn tracking-widest" onClick={() => { ClearCart() }}>Clear Cart</button>

            </section>
        </>
    );



};

export default Cart;
