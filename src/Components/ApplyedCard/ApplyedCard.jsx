import React from 'react';
import { ImLocation2 } from 'react-icons/im';


const ApplyedCard = ({course}) => {
    const { id, image, course_title, location, price,Benifits }=course
    return (
        <div>
            <div className="relative flex max-w-[48rem] w-full  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md gap-4">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
       {course_title}
    </h6>
    <h4 className="mb-2 block font-sans  font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    {Benifits}
    </h4>
    <p className="mb-8 text-xl font-sans  font-normal leading-relaxed text-gray-700 antialiased flex"><ImLocation2></ImLocation2>  
     {location}
    </p>
    <p>price: {price}</p>
    <a className="inline-block" href="#">
      <button
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        View Details
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>

</div>
        </div>
    );
};

export default ApplyedCard;