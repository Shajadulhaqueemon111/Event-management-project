import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

const CourseDetails = () => {
const {id}=useParams()

    
    return (
        <div>
             
            <h2>Details Page</h2>
            {id}
        </div>
    );
};

export default CourseDetails;