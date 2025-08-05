import { useState } from "react";
import { numberGenerator, evaluateSum } from "./helper";
import "./Ticket";
import Ticket from "./Ticket";
import Button from "./Button";

function Lottery({ n, winningCondition }) {
  let [ticket, setTicket] = useState(numberGenerator(n));
  //let isWin = evaluateSum(ticket) === winningNumber;

  let isWin = winningCondition(ticket);

  let getNewTicket = () => {
    setTicket(numberGenerator(n));
  };

  return (
    <div className="Lottery">
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket}></Ticket>
      <Button action={getNewTicket}></Button>
      <h3>{isWin && "Congratulations, you won"}</h3>
    </div>
  );
}

export default Lottery;
