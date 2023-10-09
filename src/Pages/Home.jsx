import React from 'react';
import Banner from './BannerPage/Banner';
import Course from '../Components/CourseList/Course';
import Footer from '../Components/Footer/Footer';
import ServiceProvider from '../Components/ServiceProvider';
import ServiceBenifits from '../Components/ServiceBenifits';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
           <Course></Course>
           <ServiceProvider></ServiceProvider>
           <ServiceBenifits></ServiceBenifits>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;