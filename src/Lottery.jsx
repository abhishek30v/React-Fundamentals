import { useState } from "react";

function Lottery() {
  const [ticket, setTicket] = useState([0, 0, 0]);

  return (
    <div>
      <h1>Lottery Game</h1>
      <div className="ticketNumber">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <button>Get New Ticket</button>
    </div>
  );
}
