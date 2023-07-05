import { useState, useEffect } from "react";
/**
 * Components get re-rendered only on 3 conditions
 * i. state variable changes
 * ii. props changes
 * iii. parent re-renders
 */
const Counter = () => {
  // let ctr = 0;
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    /** code written here will be called after every render
     * we can pass dependency array as the second argument to
     * control how when the useEffect should be called
     *
     * if we pass empty array - this will called only during mounting
     * React will call your cleanup function before the
     * Effect runs next time,
     * and during the unmount.
     */
    console.log("value after rendering ", counter);
    // return () => {
    //   console.log("counter from return function ", counter);
    // };
    return function () {
      console.log("counter from return function ", counter);
    };
  }, []);

  // const arr = [10,20]
  // const [a,b] = arr // a = arr[0] and b = arr[1]
  // console.log(a,b)

  const handleIncrement = () => {
    // ctr += 1;
    setCounter(counter + 1);
    // console.log("increased state variables to ", counter);

    // console.log("increased local var ", ctr);
  };
  const handleDecrement = () => {
    // ctr -= 1;
    setCounter(counter - 1);
    // console.log("decreased to ", ctr);
  };
  return (
    <div>
      <button onClick={handleDecrement} style={{ marginRight: "5px" }}>
        -
      </button>
      <span>{counter}</span>
      <button onClick={handleIncrement} style={{ marginLeft: "5px" }}>
        +
      </button>
    </div>
  );
};

// function Counter(){
//   const val = ''
//   return (
//     <div></div>
//   )
// }

export default Counter;
