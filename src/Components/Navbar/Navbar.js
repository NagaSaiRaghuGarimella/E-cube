import React from "react";
import { Link } from "react-router-dom";
// import Movies from './Movies'
// import Eventslider from './Eventslider';

function Navbar() {
  return (
    <div>
      <nav className="bg-sky-300">
        <div className="flex">
          <Link to="/" className="text-2xl text-gray-400 font-sans font-bold ml-2">
            E-Cube
          </Link>

          <input
            type="text"
            className="mx-20 pl-9 border rounded-md"
            placeholder="Search for movies here"/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6 text-slate-500 absolute left-40 my-1 mx-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        </div>
      </nav>

      <div className="bg-gray-600">
        <div className=" h-10 flex items-center justify-center space-x-6">
          <Link to="/latestMovies" className="hover:text-white">Latest Movies</Link>
          <Link to="/upcomingMovies" className="hover:text-white">Upcoming Movies</Link>
          <Link to="/nearbyEvents" className="hover:text-white">Nearby Events</Link>
        </div>
      </div>
    </div>
    // ---
  );
}

export default Navbar;
