

// export default Banner;
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
  

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  // Rest of your component code...

 

  return (
    
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/2ZT03hW/istockphoto-1129332568-170667a.webp)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold" data-aos="fade-up">Turn Your Dreams into Reality at the Training Programs Event</h1>
      <p className="mb-5" data-aos="fade-up" data-aos-delay="200">Gain a competitive edge in your career with our tailored training programs that focus on practical skills and up-to-date industry insights.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  
  
  
    );

};

export default Banner;
