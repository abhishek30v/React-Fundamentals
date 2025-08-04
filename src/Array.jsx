import { useState } from "react";

export default function Game2() {
  const [count, setCount] = useState([0]);
  const [index, setIndex] = useState(0);

  function incCount() {
    let curr = count[index];
    curr += 1;
    count.push(curr);
    console.log(curr);
    setCount([...count]);
    setIndex(index + 1);
  }

  return (
    <div>
      <p>show currNumber: {count[index]}</p>
      <button onClick={incCount}>Push current number:</button>
    </div>
  );
}
