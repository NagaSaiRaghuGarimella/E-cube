import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import LatestMovies from "./Pages/LatestMovies";
import UpcomingMovies from "./Pages/UpcomingMovies";
import NearbyEvents from "./Pages/NearbyEvents";
import MovieDetails from "./Components/Shared/MovieDetails/MovieDetails";
import { baseUrl } from "./Components/Utils/apiLink";
import TicketBooking from "./Pages/TicketBooking";
import FinalBooking from "./Pages/FinalBooking";

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
        element={<MovieDetails apiLink={`${baseUrl}latest`}></MovieDetails>}
      ></Route>
      <Route
        path="/upcomingMovies/:userId"
        element={
          <MovieDetails apiLink={`${baseUrl}upcomingMovies`}></MovieDetails>
        }
      ></Route>
      <Route
        path="/nearbyEvents/:userId"
        element={<MovieDetails apiLink={`${baseUrl}events`}></MovieDetails>}
      ></Route>
      <Route
        path="/ticketBooking"
        element={<TicketBooking></TicketBooking>}
      ></Route>
      <Route
        path="/finalBooking"
        element={<FinalBooking></FinalBooking>}
      ></Route>
      ;
    </Routes>
  </BrowserRouter>
  );
}

export default App;
