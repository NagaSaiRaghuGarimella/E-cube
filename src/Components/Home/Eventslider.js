import React from "react";
import LatestMovies from "../../Pages/LatestMovies";

function Eventslider() {
  // return (
  //   <div>
  //     <div className="Eventimg">
  //       <button onclick="rightScroll()" id="left">
  //         &#10094;
  //       </button>

  //       <div className="slider">
  //         <img
  //           src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png"
  //           alt=""
  //         />
  //       </div>

  //       <div className="slider">
  //         <img
  //           src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png"
  //           alt=""
  //         />
  //       </div>
  //       <div className="slider">
  //         <img
  //           src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png"
  //           alt=""
  //         />
  //       </div>
  //       <div className="slider">
  //         <img
  //           src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202211140440.png"
  //           alt=""
  //         />
  //       </div>
  //       <div className="slider">
  //         <img
  //           src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png"
  //           alt=""
  //         />
  //       </div>
  //       <div className="slider">
  //         <img
  //           src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/upskill-collection-202211140440.png"
  //           alt=""
  //         />
  //       </div>
  //       <div className="slider">
  //         <img
  //           src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/arts-crafts-collection-202211140440.png"
  //           alt=""
  //         />
  //       </div>
  //       <div className="slider">
  //         <img
  //           src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/dance-classes-collection-202211140440.png"
  //           alt=""
  //         />
  //       </div>
  //       <button onclick="leftScroll()" id="right">
  //         &#10095;
  //       </button>
  //     </div>
  //   </div>
  // );

//   const slideImages = [
//     {src:"/Images/slider-badging.jpg"},
//     {src:"/Images/slider-badag.jpg"},
//     {src:"/Images/slider-scale.jpg"},
//     {src:"/Images/slider-scales.jpg"},
// ]

const movies = LatestMovies();
console.log(movies);
// useEffect(()=>{

// })
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevState) => (prevState + 1) % movies.length)
    }, 3000)

    // clean up the interval when component unmounts or count value updated.
    return () => { clearInterval(interval) };
  }, [count])
  return (
    <div className="AllBanners">
      <MdArrowForwardIos className="forward" onClick={()=>setCount((prevCount)=>(prevCount===bannersArray.length-1?0:prevCount+1))}/>
      {movies.map((x, index) => {
        return (index === count) &&
          <div className="BannerParent" key={x.id_no}>

            <div className="Banner">
              <h2>{x.id.toUpperCase()}</h2>
              <div>{x.text}</div>
            </div>
            {x.button && (
              <Link to={x.link}>
                <button>{x.btn_name}</button>
              </Link>
            )}

          </div>
      })}
      <MdArrowBackIosNew className="backward" onClick={()=>setCount((prevCount)=>(prevCount===0?bannersArray.length-1:prevCount-1))}/>
    </div>
  );
}

export default Eventslider;
