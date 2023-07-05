import { useState, useMemo } from "react";
import "./styles.css";

export default function App() {
  let temp = 0;
  const initialFruits = [
    { name: "Apple", likes: 30 },
    { name: "Guava", likes: 20 },
    { name: "Mango", likes: 40 }
  ];
  /**
   * Rules of hooks
   * 1. applicable only funcitonal components
   * 2. hooks should be called at the top level
   * 3. Hooks cannot be declared conditionally - inside a loop
   *  3.1 internally your hooks are implemented in form of array
   */
  const [show, setShow] = useState(true);
  const [order, setOrder] = useState("desc");
  const [fruits, setFruits] = useState(initialFruits);

  // const orderedFruits = fruits.sort((a, b) => {
  //   console.log("sorting fruits");
  //   return b.likes - a.likes;
  // });
  // > 0 -> b will be kept first
  // < 0 -> a will be kept fist
  // == 0 -> order will not change
  // custom comparator function

  const orderedFruits = useMemo(
    function () {
      console.log("sorting fruits");
      if (order === "desc") {
        return fruits.sort((a, b) => b.likes - a.likes);
      } else {
        return fruits.sort((a, b) => a.likes - b.likes);
      }
    },
    [fruits, order]
  );

  const handleShow = () => {
    setShow(!show);
  };

  const toggleOrder = () => {
    setOrder(order === "desc" ? "asc" : "desc");
    /** how to measure the time difference for operations */
    // console.time("orderingFruits");
    // for (let i = 0; i < 1000; i++) {
    //   temp += 1;
    // }
    // console.timeEnd("orderingFruits");
  };

  const addOrange = () => {
    const newFruits = fruits.concat([{ name: "Orange", likes: 25 }]);
    setFruits(newFruits);
  };

  // function dummySort(a,b){
  //   /// a + b
  //   return fruits.sort(....)
  // }
  // const dummySort = (a,b) => {
  //   /// a+ b
  //   return fruits.sort(....)
  // }
  return (
    <div className="App">
      <button onClick={handleShow}>Hide/SHow Table</button>
      <button style={{ marginLeft: 10 }} onClick={toggleOrder}>
        Toggle Order
      </button>
      {show && (
        <table>
          <thead>
            <tr>
              <td>Rank</td>
              <td>Name</td>
              <td>Likes</td>
            </tr>
          </thead>
          <tbody>
            {orderedFruits.map((fruit, index) => (
              <tr key={fruit.name}>
                <td>{index + 1}</td>
                <td>{fruit.name}</td>
                <td>{fruit.likes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={addOrange}>Add Orange</button>
    </div>
  );
}
