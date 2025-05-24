import React, { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import { FaUserAlt, FaCartPlus } from "react-icons/fa";
import useGlobalContext from '../Context';
import { useCart } from '../CartContext';


const Navbar = () => {
    const { count, setCount, Logout } = useGlobalContext();
    const { totalAmount } = useCart()

    return (
        <>
            <nav className='sticky top-0 z-50'>
                <div className="navbar bg-indigo-600 shadow-sm">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg> */}
                                <RiMenu3Fill className='text-2xl' />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/products'>Products</Link></li>
                                <li><Link to='/cart'>Cart</Link></li>
                                <li><Link to='/register'>Register</Link></li>
                            </ul>
                        </div>
                        <Link to='/' className="font-bold text-3xl md:ms-15">Shopzy</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to='/' className='text-2xl'>Home</Link></li>
                            <li><Link to='/about' className='text-2xl'>About</Link></li>
                            <li><Link to='/products' className='text-2xl'>Products</Link></li>
                            <li><Link to='/cart' className='text-2xl'>Cart</Link></li>
                            <li><Link to='/register' className='text-2xl'>Register</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end md:mr-15">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <details>
                                    <summary><FaUserAlt className='text-2xl' /></summary>
                                    <ul className="p-2 z-50">
                                        <li><Link to='/login'>Login</Link></li>
                                        <li><Link to='/login' onClick={Logout}>Logout</Link></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                        <div className="indicator">
                            <span className="indicator-item badge bg-indigo-300 font-bold mr-4">{totalAmount}</span>
                            <Link to='./Cart' className="btn"><FaCartPlus className='text-2xl' /></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
