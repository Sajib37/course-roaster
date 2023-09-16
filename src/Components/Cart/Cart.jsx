import React from 'react';

const Cart = ({selectCourse,totalPrice,totalCredit,remainingCredit}) => {
    return (
        <div className=' mx-auto w-[300px] bg-white'>
            <h1 className='text-[#2F80ED] font-bold text-xl'>Credit Hour remaining : <span>{ remainingCredit}</span>hr</h1>
            <hr></hr>
            <div className='my-4'>
                <h1 className='font-bold text-xl'>Course Name:</h1>
                {
                    selectCourse.map((course,index)=><li className='text-gray-500 list-decimal' key={index}>{course.course_name}</li>)
                }
            </div>
            <hr></hr>
            <h1 className=' font-medium'>Total Credit Hour: <span>{ totalCredit}hour</span></h1>
            <hr></hr>
            <h1 className=' font-medium'>Total Price: <span>{ totalPrice}</span>$</h1>

        </div>
    );
};


export default Cart;