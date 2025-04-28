import React, { useReducer, useState } from 'react'
import data from './data.js'


const defaultState = {
    people: data
}

const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        console.log('clear here');
        return { ...state, people: [] }

    }

    return state;
}


const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    // console.log(state);

    const ClearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }


    return (
        <>
            <h1>UseReducer</h1>
            <button className='bg-red-400 py-2 px-5' onClick={ClearCart}>Clear</button>
        </>

    )
}

export default UseReducer;