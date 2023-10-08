import { useParams } from "react-router-dom";
import {BsPlay} from 'react-icons/bs';

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
    <div>
      <div className = "ralative">
        <h1 className="text-2xl font-bold">Movie Details</h1>
        <img className="w-screen h-screen" src={imageUrl} alt="" />
        <div className="absolute top-[65%] ml-40">
          <h1 className="text-3xl font-mono font-extrabold">{name}</h1>
          <p className="text-xl font-bold">9th Sep</p>
          <p className="font-semibold">2hr 41min</p>
          <p className="font-extrabold text-white">{rate} <span className="text-yellow-500 text-xl font-bold">***</span></p>
        </div>
        <p className=" absolute border text-white font-semibold text-xl flex items-center rounded-md p-1 hover:bg-black top-[85%] mx-40"><BsPlay className="text-2xl"/>Trailer</p>
      </div>
      <button className=" absolute top-[95%] text-white bg-red-500 p-1 rounded-md mx-40 hover:scale-105">Book Tickets</button>
    </div>
  );
}
export default MovieDetails;
