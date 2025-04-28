import React from 'react'
import { banners } from '../data'


const SLickItems = () => {
    return (
        <div>
            {banners.map((items) => {
                const { img } = items;
                console.log(img)
                return (
                    <>
                        <div>
                            <h1>hello</h1>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default SLickItems