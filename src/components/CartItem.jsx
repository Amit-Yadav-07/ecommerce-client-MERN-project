import React from 'react'
import Dropdown from './Dropdown'
import { useCart } from '../CartContext';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";


const CartItem = ({ items }) => {

    const { remove, increase, decrease } = useCart()

    const { id, title, price, img, amount } = items;
    // console.log(ite);


    return (
        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
            <div className="md:col-span-3  text-white p-2">
                <img src={img} alt={title} className='rounded' />
            </div>

            <div className="md:col-span-7  flex justify-center flex-col text-center text-white p-2">
                <h3 className='text-1xl'>{title}</h3>
                <strong>{`$ ${price}`}</strong>
                <button type='button' className='btn mx-auto mt-2 cursor-pointer' onClick={() => { remove(id) }}>Remove</button>
            </div>


            <div className="md:col-span-2 text-white  p-2 flex justify-center text-center flex-col align-middle">

                <FaChevronUp className='lg:text-start text-center w-[100%]' onClick={() => { increase(id) }} />
                <h3 className='font-bold text-2xl text-center'>{amount}</h3>
                <FaChevronDown className='lg:text-start text-center w-[100%]' onClick={() => { decrease(id) }} />

            </div>
        </div>

    )
}

export default CartItem




