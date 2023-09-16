import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
const AllCourses = ({handleSelectCourse}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
    fetch('./data.json')
        .then(res => res.json())
        .then(data=>setCourses(data))
    }, [])
    return (
        <div className="w-4/5 grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                courses.map((course,index)=><Course key={index} course={course} handleSelectCourse={handleSelectCourse}></Course>)
            }
        </div>
    );
};

export default AllCourses;