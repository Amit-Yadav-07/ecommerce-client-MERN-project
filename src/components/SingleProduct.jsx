import React from 'react'
import customFetch from '../utils/customFetch'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import Btn from './Btn'
import { useCart } from '../CartContext'


const transformProductToCartShape = (product) => {
    return {
        id: product._id,
        title: product.name,
        price: product.price.toFixed(2),
        img: product.images[0],
        description: product.description,
        brand: product.brand,
        amount: 1,
    };
};


// --- Loader to fetch and transform ---
export const Loader = async ({ params }) => {
    const { id } = params;
    try {
        const response = await customFetch.get(`products/singleProduct/${id}`);
        const rawProduct = response?.data?.product;
        const transformedProduct = transformProductToCartShape(rawProduct);
        return transformedProduct;
    } catch (error) {
        console.log(error);
        return error;
    }
};

const SingleProduct = () => {
    const product = useLoaderData();
    console.log(product);
    const { handleAddToCart } = useCart();

    const addToCart = () => {
        console.log("Product added to cart:", product);
        return handleAddToCart(product)
    }

    return (

        <>
            <section className='grid lg:grid-cols-[0.7fr_1fr] grid-cols-1 gap-10  w-[90%] mx-auto my-15'>
                <div className='h-[400px]'>
                    <img className='w-[100%] h-[100%] object-cover rounded' src={product.img} alt={product.description} />
                </div>

                <div className=' text-black self-center rounded bg-gray-50 py-20 px-10'>
                    <h3 className='text-2xl font-bold mb-4'>{product.brand}</h3>
                    <p>{product.description}</p>
                    <h4 className='my-1'>{product.name}</h4>
                    <strong className='block mb-4'>{product.price}</strong>
                    {/* <Link to='/cart' className='bg-indigo-400 text-white p-2 px-3 rounded-md mr-auto' onClick={() => { console.log(id) }}>Add to cart</Link> */}
                    <button type='button' className='btn' onClick={() => { addToCart() }}>add to cart</button>
                </div>
            </section>
        </>
    )
}

export default SingleProduct;