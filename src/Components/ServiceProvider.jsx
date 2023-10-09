import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const ServiceProvider = () => {

    const [services,setService]=useState([])

    useEffect(()=>{
        fetch('/Service.json')
        .then(res=>res.json())
        .then(data=>setService(data))

    },[])
    return (
        
        <div>
            <h2 className='text-center font-bold text-2xl mt-10'>Service Provider</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    services.map(Service=><ServiceCard key={Service.id} Service={Service}></ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default ServiceProvider;