import {useState, useEffect} from "react";
import axios from "axios";

export const useLatestMovies = () =>{
    const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    axios.get("http://3.17.216.66:4000/latest").then((response) => {
      setMoviesList(response.data);
      console.log(response.data);
    });
  }, []);
  return moviesList;
}
