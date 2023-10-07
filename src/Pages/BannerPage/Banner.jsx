



    // const imageUrl1 = 'https://i.ibb.co/2ZT03hW/istockphoto-1129332568-170667a.webp';
    // const imageUrl2 = 'https://i.ibb.co/6bvvZvB/download-4.jpg'; // Replace with your second image URL
    // const imageUrl3 = 'https://i.ibb.co/yXzHmms/istockphoto-1179434300-170667a.webp';  // Replace with your third image URL





// export default Banner;
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css';    

const Banner = () => {
  const imageUrl =
    'https://i.ibb.co/2ZT03hW/istockphoto-1129332568-170667a.webp';

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <div className='banner-container'>
      <div className='banner-image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='banner-content'>
        <h2 data-aos='fade-up' className='text-2xl font-bold'>
          FOR HUNDREDS OF SUCCESSFULLY STUDENT HERE
        </h2>
        <h2 data-aos='fade-up' data-aos-delay='200' className='text-3xl font-bold'>
          EDUCATION IS A{' '}
          <span className='text-red-500 font-bold text-3xl'>BACKBONE OF LIFE</span>
        </h2>
      </div>
    </div>
  );
};

export default Banner;
