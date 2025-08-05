//Working of closures in react using states

import { useState } from "react";

export default function Count() {
  const [like, isLike] = useState(false);
  const [count, setCount] = useState(0);
  console.log(`isLiked : ${like} and count : ${count}`);

  function isToggle() {
    isLike((currLike) => {
      return (currLike = !currLike);
    });

    setCount((currCount) => {
      return (currCount = currCount + 1);
    });
  }

  var likedStyle = { backgroundColor: "red" };
  var notLikedStyle = { backgroundColor: "white" };
  return (
    <div>
      <p>count: {count}</p>
      <p>like : {like.toString()}</p>
      {like ? (
        <button onClick={isToggle} style={likedStyle}></button>
      ) : (
        <button onClick={isToggle} style={notLikedStyle}></button>
      )}
    </div>
  );
}
