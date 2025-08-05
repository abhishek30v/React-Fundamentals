import "./App.css";
import Todo from "./TodoList";
import Lottery from "./Lottery";
import { evaluateSum } from "./helper";

function App() {
  let winningCondition = (array) => {
    return evaluateSum(array) === 15;
  };

  return (
    <>
      <Lottery n={3} winningCondition={winningCondition}></Lottery>
    </>
  );
}

export default App;
