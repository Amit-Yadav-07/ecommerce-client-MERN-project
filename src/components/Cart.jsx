import React, { useEffect } from "react";
import { FaCartPlus, FaTrashAlt } from "react-icons/fa";
import CartItem from "./CartItem";
import { useCart } from "../CartContext";
import axios from 'axios'

const Cart = () => {

    const { cart, ClearCart, totalCost } = useCart();

    const cartArray = Array.from(cart.entries());

    useEffect(() => {
        const cartArray = Array.from(cart.entries());
        localStorage.setItem('cartItems', JSON.stringify(cartArray));
    }, [cart]);


    if (cartArray.length === 0) {
        return <h2 className="text-black text-3xl text-center mt-30 font-bold">Your Cart is Currently Empty</h2>
    }

    // --------------razorpay start------------------------
    const checkOutHandler = async (amount) => {

        const { data: { key } } = await axios.get('http://localhost:5000/api/v1/getkey');
        // console.log(key);

        const { data: { order } } = await axios.post('http://localhost:5000/api/v1/checkout', {
            amount: totalCost
        });

        // console.log(order);

        const options = {
            key: key,
            amount: totalCost,
            currency: "INR",
            "name": "Amit Yadav",
            description: "The White Sand",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYP-KKtRJXm9qK7k2_PA1utxbxWdpzGIdulQ&s",
            order_id: order.id,
            callback_url: "http://localhost:5000/api/v1/paymentverification",
            prefill: {
                name: "john doe",
                email: "john@example.com",
                contact: "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };

        const razor = new window.Razorpay(options);
        console.log(razor);

        razor.open();

    }

    // --------------razorpay end------------------------

    return (
        <>
            <section className="cart-container lg:w-[80%] w-[100%] text-center mx-auto py-5">
                <h2 className="my-10 text-3xl font-bold p-4 text-black">Shopping Cart</h2>
                <hr className="text-black" />

                <div className="p-10 w-[85%] mx-auto ">
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

                    <div className="flex w-[100%] justify-around align-middle bg-indigo-400 pb-3">


                        <div className="text-white text-2xl font-bold">Total : {`₹ ${totalCost.toFixed(2)}`}</div>
                        <div className="">
                            <button type='button' className='btn cursor-pointer' onClick={() => { checkOutHandler() }}>Make Payment</button>
                        </div>

                    </div>

                </div>
                <button className="btn tracking-widest" onClick={() => { ClearCart() }}>Clear Cart</button>

            </section>
        </>
    );



};

export default Cart;
