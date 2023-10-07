import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS
import { Link } from 'react-router-dom';
import { ImLocation } from 'react-icons/im';

const CourseCard = ({ allCourse }) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const { id, image, course_title, location, price } = allCourse;

  return (
    <div className='w-96 mx-auto'>
      <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{course_title}</h2>
          <div className='flex'>
          <p className=' font-bold flex font-xl'><ImLocation className='text-xl'></ImLocation>{location}</p>
          <p className='font-bold'>{price}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"><Link to={`/details/${id}`}>Course Details</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
