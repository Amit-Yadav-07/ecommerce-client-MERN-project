import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {

    const searchQuery = useSearchParams()[0];

    return (
        <>
            <h1>Order Success</h1>
            <strong className='text-black'>{`reference no - ${searchQuery.get('reference')}`}</strong>
        </>
    )
}

export default PaymentSuccess;