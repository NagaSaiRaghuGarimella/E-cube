import React from "react";
import MovieCards from "./MovieCards";
import "./Shows.css";
import { Link } from "react-router-dom";

function Shows({ MoviesList }) {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3
          px-20 py-3">
        {MoviesList.map((movie) => {
          return (
            <Link key={movie._id} to={movie._id}>
              <MovieCards id={movie._id} img={movie.imageUrl}></MovieCards>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Shows;
