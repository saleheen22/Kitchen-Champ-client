import { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const [reviewData, setReviewData] =useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data=>{
      console.log(data);
      setReviewData(data)
    })
  }, [])




    return (
       <div>
        <h2 className="text-center text-3xl">What Our Previous Students Say</h2>
         <div className="grid md:grid-cols-3">

        {
          reviewData.map(rv => <>
          <div key={rv._id} className="card card-compact w-96 bg-base-100 mt-12 mb-12 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{rv.name}</h2>
            
            <FaQuoteLeft></FaQuoteLeft>
            <p>{rv.review}</p>
            <div className="card-actions justify-end">
             <FaQuoteRight></FaQuoteRight>
            </div>
          </div>
        </div>
          </>)
        }
        </div>
       </div>
    );
};

export default Reviews;