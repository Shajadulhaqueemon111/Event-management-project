import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCard = ({ Service }) => {
  const { id, name, image, location } = Service;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div
        className="card mx-auto mt-4 w-64 max-w-screen-md bg-base-100 shadow-xl"
        data-aos="fade-up" 
        data-aos-duration="1000" 
      >
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-bold">Location: {location}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
