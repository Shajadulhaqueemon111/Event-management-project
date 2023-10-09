import React from 'react';

const AboutCard = ({ About }) => {
  const { courseName, image, description, duration, price, instructor, startDate, enrollmentStatus } = About;

  return (
    <div>
      <div className="card mx-auto w-64 max-w-xs bg-white border rounded-lg shadow-lg">
        <figure>
          <img src={image} alt={courseName} className="w-full h-40 object-cover" />
        </figure>
        <div className="card-body text-base-content">
          <h2 className="card-title text-lg font-semibold">{courseName}</h2>
          <p className="text-sm text-gray-600">{description}</p>
          <p className="text-sm">Duration: {duration}</p>
          <p className="text-sm">Price: ${price}</p>
          <p className="text-sm">Instructor: {instructor}</p>
          <p className="text-sm">Start Date: {startDate}</p>
          <p className="text-sm">Enrollment Status: {enrollmentStatus}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
