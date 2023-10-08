import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import toast from 'react-hot-toast';
import { saveCourseApplication } from '../../Components/LocalStorage';

const CourseDetails = () => {
const details=useLoaderData();
const {id}=useParams()
const idInt=parseInt(id)
const detail=details.find(detail=>detail.id===idInt)
console.log(detail)

const handelApplyCourse=()=>{
    saveCourseApplication(idInt);
    toast.success('Successfully Applyed !') 

}
    
    return (
        <div>
             
            <h2 className='text-2xl text-center'>Details Page : {id}</h2> 
            <div className='grid gap-4 md:grid-cols-4 '>
                <div className='border md:col-span-3 bg-slate-200'>
                   
                    <h2 className='text-2xl font-bold'> Description:</h2>
                    <h2 > <span>{detail.course_description}</span> </h2>
                </div>
                <div className='border p-4 bg-slate-200'>
                    <h2 className='text-2xl'> Details</h2>
                    <h2>Price:{detail.price}</h2>
                    <h2>Title: {detail.course_title} </h2>
                    <hr />
                    <h2>Phone: {detail.Phone_number}</h2>
                    <h2>Email: {detail.email}</h2>
                    <button onClick={handelApplyCourse} className='btn btn-primary w-full mt-4'>Applly Now</button>
                </div>

            </div>
           <Footer></Footer>
        </div>
    );
};

export default CourseDetails;