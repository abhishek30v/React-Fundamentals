import TicketNumber from "./TicketNumber";
import "./Ticket.css";

export default function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <h3>Ticket</h3>
      {ticket.map((num, index) => (
        <TicketNumber num={num} key={index} />
      ))}
    </div>
  );
}
