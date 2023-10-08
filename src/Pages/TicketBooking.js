import { Link } from "react-router-dom";
import "./TicketBooking.css";
import { useState } from "react";

const TicketBooking = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>TicketBooking</h1>
      <div
        action=""
        style={{ width: "200px", display: "flex", flexDirection: "column" }}
      >
        <input type="date" />
        <select name="" id="">
          <option value="10:00 AM">10:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="2:00 PM"> 02:00 PM</option>
          <option value="6:00 PM"> 06:00 PM</option>
        </select>
        <div className="noOfTickets">
          <button onClick={() => setCount(count - 1)}>-</button>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <Link to="/finalBooking">
          <button className="bookNow-btn">Book Now</button>
        </Link>
      </div>
    </div>
  );
};
export default TicketBooking;