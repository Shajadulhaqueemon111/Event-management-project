import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCourseApplication } from '../Components/LocalStorage';
import ApplyedCard from '../Components/ApplyedCard/ApplyedCard';
import Footer from '../Components/Footer/Footer';

const ApplyedCourse = () => {
    const courses = useLoaderData();
    const [appliedCourse, setAppliedCourse] = useState([]);

    useEffect(() => {
        const storedCourseId = getStoredCourseApplication();
    
        console.log('Stored Course IDs:', storedCourseId);

    //     const courseApplied=courses.filter(course=>storedCourseId.includes(course.id))
    // console.log(courses,storedCourseId,courseApplied)
        if (courses.length > 0) {
            const courseApplied = [];
            for (const id of storedCourseId) {
                const coursed = courses.find(course => course.id === id);
                if (coursed) {
                    courseApplied.push(coursed);
                }
            }
    
            console.log('Applied Courses:', courseApplied); 
    
            setAppliedCourse(courseApplied);
        }
    }, []);
    

    return (
        <div>
            <h2>{appliedCourse.length}</h2>
            <div className='w-3/4 mx-auto  gap-4'>
                {
                    appliedCourse.map(course => (
                        <ApplyedCard key={course.id} course={course} />
                    ))
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ApplyedCourse;
