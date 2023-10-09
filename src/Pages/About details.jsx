import React, { useEffect, useState } from 'react';
import AboutCard from './AboutCard';
import Footer from '../Components/Footer/Footer';

const AboutDetails = () => {

    const[aboutCard,setAbout]=useState([])

    useEffect(()=>{

        fetch('/About.json')
        .then(res=>res.json())
        .then(data=>setAbout(data))
    },[])
    return (
        <div>
           <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
           {
            aboutCard.map(About=><AboutCard key={About.id} About={About}></AboutCard>)
                
            }
           </div>
           <Footer></Footer>
        </div>
    );
};

export default AboutDetails;