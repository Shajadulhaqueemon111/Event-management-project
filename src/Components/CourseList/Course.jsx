import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard';

const Course = () => {

    const [course,setCourse]=useState([])

    useEffect(()=>{
        fetch('/course.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))

    },[])
    return (
        <div>
            <h2 className='text-center font-bold text-4xl mt-5 mb-6' >Our Service <span className='text-blue-400'>Course</span></h2>
           <div className='mt-5 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
                course.map(allCourse=><CourseCard key={allCourse.id} allCourse={allCourse}></CourseCard>)
            }
           </div>
        </div>
    );
};

export default Course;