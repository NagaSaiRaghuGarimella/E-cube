import { useParams } from "react-router-dom";
import {BsPlay} from 'react-icons/bs';
import {MdStarRate} from 'react-icons/md'

const MoviesList = [
  {
    _id: "5ab12666f36d2879268f2902",
    name: "Death Wish",
    language: "ENGLISH",
    type: "Action Crime Thriller",
    rate: 3.2,
    imageUrl: "https://image.ibb.co/gC9PfH/dw.jpg",
  },
  {
    _id: "5ab12612f36d2879268f284a",
    name: "Black Panther",
    language: "ENGLISH",
    rate: 4.5,
    type: "Action Adventure Fantasy",
    imageUrl: "https://image.ibb.co/f0hhZc/bp.jpg",
  },
  {
    _id: "5ab12678f36d2879268f291d",
    name: "Coco",
    language: "ENGLISH",
    type: "Adventure Animation Family",
    rate: 5,
    imageUrl: "https://image.ibb.co/dQwWSx/coco.jpg",
  },
];

function MovieDetails() {
  const userId = useParams().userId;
  const movieDetails = MoviesList.filter((movie) => movie._id === userId);
  const { name, language, rate, type, imageUrl } = movieDetails[0];
  return (

    <div className="h-screen w-full bg-sky-400" >
      <div className="mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="">
         <img className="w-full" src={imageUrl} alt="" />
        </div>
        <div className="flex flex-col">
         <div className="flex justify-between">
           <p>Death Wish</p>
           <p>9th Sep</p>
         </div>
         <p>Run Time : 2h 41min</p>
         <p><MdStarRate/>{rate}/5</p>
         <p><BsPlay/>Trailer</p>
        </div>
      </div>
      <button>Book Tickets</button>
    </div>
    // <div className="h-screen w-full">
    // <div className="max-w-screen-lg flex items-center justify-center h-full px-4 md:flex-row">
    //   <div className = "">
    //     {/* <h1 className="text-2xl font-bold">Movie Details</h1> */}
    //     <img className="w-3/5" src={imageUrl} alt="" />
    //     </div>
    //     <div className=" flex flex-col justify-center h-full">
    //       <div className="flex items-center">
    //       <h1 className="text-5xl font-mono font-extrabold">{name}</h1>
    //       <p className="text-3xl font-bold ml-20">9th Sep</p>
    //       </div>
    //       <p className="text-2xl text-center font-semibold mt-10">Run Time : 2hr 41min</p>
    //       <p className="font-extrabold flex items-center mx-56 mt-10"><MdStarRate className="text-2xl font-bold"/>{rate} <span className="font-bold">/5</span></p>
    //       <p className="border border-blue-600 font-semibold text-xl flex items-center rounded-md p-1 hover:bg-slate-300 mx-56 mt-10 w-24"><BsPlay className="text-2xl"/>Trailer</p>
    //   </div>
    //   </div>
    //   <button className="text-white bg-red-500 p-1 rounded-md mx-56 my-3 w-44 hover:scale-105">Book Tickets</button>
    // </div>
  );
}
export default MovieDetails;
