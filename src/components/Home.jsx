import React from 'react'
import SlickCarousel from './SlickCarousel';
import TradingCloth from './TradingCloth';

const Home = () => {
    return (
        <>
            <SlickCarousel />

            <div className='w-[80%] mx-auto pb-10'>
                <h3 className='text-black text-5xl my-10 text-center'>Trading Collections</h3>
                <div className='card-parent'>
                    <TradingCloth men='mens' />
                    <TradingCloth women='women' />
                    <TradingCloth kids='kids' />
                </div>
            </div>

        </>
    )
}

export default Home;