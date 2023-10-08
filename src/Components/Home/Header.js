import React, { useEffect, useState } from "react";
import Shows from "../Shared/Shows";
import axios from "axios";
import LatestMovies from "../../Pages/LatestMovies";
import { useLatestMovies } from "../useLatestMovies";
import {MdArrowForwardIos, MdArrowBackIosNew} from 'react-icons/md';

const couraselImgs = [
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1692875161616_rakhshbandhadesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1691130965445_wwesuperstardesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1690628905918_webbannernpa.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1692954046674_lolladesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1690965948939_virdasreviseddesktop.jpg",
];

function Header() {
  const [imgcount, setImgCount] = useState(0);
  const [moviesList, setMoviesList] = useState(null);

  useEffect(() => {
    axios.get("http://3.17.216.66:4000/latest").then((response) => {
      setMoviesList(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgcount === couraselImgs.length - 1) {
        setImgCount(0);
      } else {
        setImgCount(imgcount + 1);
      }
    }, 3000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [imgcount]);

  if (!moviesList) return null;
  return (
    <div>
      <div className="slide">
        {/* slider */}

        <div className="courasel">
          <button
            style={{ padding: "20px" }}
            onClick={() => {
              if (imgcount === 0) {
                setImgCount(couraselImgs.length - 1);
              } else {
                setImgCount(imgcount - 1);
              }
            }}
          >
            Prev
          </button>

          <img src={couraselImgs[imgcount]} alt="" />
          <button
            style={{ padding: "20px" }}
            onClick={() => {
              if (imgcount === couraselImgs.length - 1) {
                setImgCount(0);
              } else {
                setImgCount(imgcount + 1);
              }
            }}
          >
            Next
          </button>
        </div>

          <h1 className="text-2xl font-bold ml-8">Movies</h1>
        <Shows MoviesList={moviesList}></Shows>
      </div>
    </div>
  );
}

export default Header;
// const Header = () =>{

// // const movies = useLatestMovies();
// // console.log(movies);
// // useEffect(()=>{

// // })

// const [moviesList, setMoviesList] = useState([]);

// useEffect(() => {
//   axios.get("http://3.17.216.66:4000/latest").then((response) => {
//     setMoviesList(response.data);
//     console.log(response.data);
//   });
// }, []);

// console.log(moviesList);

//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prevState) => (prevState + 1) % moviesList.length)
//     }, 3000)

//     // clean up the interval when component unmounts or count value updated.
//     return () => { clearInterval(interval) };
//   }, [count]);

//   return (
//     <div className="my-6">
//       <MdArrowForwardIos className="" onClick={()=>setCount((prevCount)=>(prevCount===moviesList.length-1?0:prevCount+1))}/>
//       {moviesList.map((movie, index) => {
//         return (index === count) &&(
//           <div className="" key={movie._id}>
//           <img src={movie.imageUrl} alt={movie.name} />
//           </div>)
//       })}
//       <MdArrowBackIosNew className="" onClick={()=>setCount((prevCount)=>(prevCount===0?moviesList.length-1:prevCount-1))}/>
//     </div>
//   );
// }

// export default Header;

