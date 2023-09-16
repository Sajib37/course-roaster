import React from 'react';

const Cart = () => {
    return (
        <div className=' mx-auto w-[300px] bg-white'>
            <h1 className='text-[#2F80ED] font-bold text-xl'>Credit Hour remaining : <span></span>hr</h1>
            <hr></hr>
            <div className='my-4'>
                <h1 className='font-bold text-xl'>Course Name:</h1>
            </div>
            <hr></hr>
            <h1 className=' font-medium'>Total Credit Hour: </h1>
            <hr></hr>
            <h1 className=' font-medium'>Total Price: <span></span>$</h1>

        </div>
    );
};


export default Cart;