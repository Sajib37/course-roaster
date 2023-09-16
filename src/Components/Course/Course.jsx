import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ course }) => {
    const {id,course_name,credit,price,details,instructor,image}=course
    return (
        <div className=' mx-auto px-4 py-2  shadow-2xl'>
            <img className='mx-auto mb-1' src={image}></img>
            <div className='h-12'><h1 className='font-semibold text-xl'>{course_name}</h1></div>
            <div className=' h-24'><p className='text-gray-500 my-2'>{details}</p></div>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <span className='font-semibold text-xl mr-1'>$</span>
                    <p className='text-gray-500'>{price}</p>
                </div>
                <div>
                    <p className='text-gray-500'>Credit: { credit}Hr</p>
                </div>
            </div>
            <button className="btn btn-info w-[100%] ">Select</button>
        </div>
    );
};

export default Course;