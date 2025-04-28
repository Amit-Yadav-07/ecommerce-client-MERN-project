import React from 'react'
import customFetch from '../utils/customFetch.js'
import { useLoaderData, useNavigate } from 'react-router-dom';
import Btn from './Btn.jsx';


const transformProductsToCartShape = (products) => {
    console.log(products);
    return products.map((product) => ({
        id: product._id,
        title: product.name,
        price: product.price.toFixed(2), // ensure price is a string like "499.00"
        img: product.images[0],// only first image
        description: product.description,
        brand: product.brand,
        amount: 1,
    }));
};

export const Loader = async () => {
    try {
        const response = await customFetch.get('/products/allProducts');
        const data = response?.data?.products;
        const transformedData = transformProductsToCartShape(data);
        console.log(transformedData);
        return transformedData;

    } catch (error) {
        console.log(error);
        return error;
    }
};

// export const Loader = async () => {

//     try {
//         const response = await customFetch.get('/products/allProducts');
//         const data = response?.data?.products;
//         console.log(data);
//         return data;

//     } catch (error) {
//         console.log(error);
//         return error
//     }

// }

const Products = () => {
    const data = useLoaderData();
    console.log(data);
    const navigate = useNavigate();

    return (
        <>
            <h1 className='text-4xl my-16 text-center'>Our Products</h1>
            <div className='card-parent'>
                {data.map((product) => {
                    const { id, img, price, title, description, brand } = product

                    return (

                        <div className="shadow-xl bg-gray-50 text-black rounded-lg shadow-3xl" key={id} onClick={() => { navigate(`/single-product/${id}`) }}>
                            <figure className='product-img-container h-[370px] w-[100%] overflow-hidden'>
                                <img
                                    src={img}
                                    alt={brand} className='rounded-lg h-[370px] w-[100%] object-cover' />
                            </figure>
                            <div className="card-body px-4 py-5">
                                <h2 className="card-title font-bold text-2xl uppercase">{brand}</h2>
                                <p className='py-3 text-[1.3rem]'>{description}</p>
                                <strong className='font-bold'>{price}/-</strong>
                                <div className="card-actions justify-end mt-3">
                                    <Btn text='details' />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Products;