import React from "react";
import "./MovieCards.css";

function MovieCards(props) {
  return (
    // <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
    //   <img className= "w-80 h-52 rounded-md duration-200 hover:scale-105" src={props.img} alt="" />
    //   <button className="bookNow-btn">Book Now</button>
    // </div>

                         <div className="">
                          <div key={props.id} className="">
                            <img src={props.img} alt="" className=' w-56 rounded-md duration-200 hover:scale-105' />
                          </div>
                          <div className="my-2 text-white">
                              <button className='bg-red-500 p-1 text-white rounded-md duration-200 hover:scale-105'>Book Now</button>
                          </div>
                        </div>

  );
}

export default MovieCards;
