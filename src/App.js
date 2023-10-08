import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import LatestMovies from "./Pages/LatestMovies";
import UpcomingMovies from "./Pages/UpcomingMovies";
import NearbyEvents from "./Pages/NearbyEvents";
import MovieDetails from "./Components/Shared/MovieDetails/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>;
        <Route
          path="/latestMovies"
          element={<LatestMovies></LatestMovies>}
        ></Route>
        <Route
          path="/upcomingMovies"
          element={<UpcomingMovies></UpcomingMovies>}
        ></Route>
        <Route
          path="/nearbyEvents"
          element={<NearbyEvents></NearbyEvents>}
        ></Route>
        <Route
          path="/latestMovies/:userId"
          element={<MovieDetails></MovieDetails>}
        ></Route>
        ;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
