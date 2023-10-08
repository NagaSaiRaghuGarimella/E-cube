import { useEffect, useState } from "react";
import MovieCards from "../Components/Shared/MovieCards";
import Shows from "../Components/Shared/Shows";
import axios from "axios";

function NearbyEvents() {
  const [moviesList, setMoviesList] = useState(null);

  useEffect(() => {
    axios.get("http://3.17.216.66:4000/events").then((response) => {
      setMoviesList(response.data);
      console.log(response.data);
    });
  }, []);

  if (!moviesList) return null;
  return (
    <div>
      <Shows MoviesList={moviesList}></Shows>
    </div>
  );
}
export default NearbyEvents;
