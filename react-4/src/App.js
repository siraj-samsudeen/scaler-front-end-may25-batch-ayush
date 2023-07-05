import { useState } from "react";
import SearchBrowser from "./components/SearchBrowser";
import SearchContext from "./context/SearchContext";
import "./styles.css";

export default function App() {
  /**
   * useState - this is used to create and manage state variable
   * useEffect - this is called to sync our app with an external system
   * useMemo - hook is used to memoize comutationally expensive operative
   *
   * props drilling - the situation where we need to pass props from one component
   * to next so that it can reach a deeply nested child component
   *
   * React Context - used to avoid the props drilling problem
   * it provides two things - Provider and other consumer
   * 
   * Quiz
   * 1. When rendering a list of products, select the correct order of keys 
   * from the options which will provide from best performance to worst performance

2. Math.random().toString()
3. product.id
4. Index of elements
5. Options are
6. i , ii, iii
7. ii, i, iii
8. iii, i, ii
9. ii, iii, i
   * 
   * 
   * Q.2  What should be passed as dependencies to useEffect 
   * if you want it to run only on first render
   * 
   * useEffect(()=>{
   * //code to be executed
   * },[])

   */
  const [char, setChar] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    // console.log(event.target.value);
    setChar(event.target.value);
  };

  const handleClick = () => {
    setLoading(true);
    fetch(`https://swapi.dev/api/people/?search=${char}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <SearchContext.Provider
        value={{ char, results, loading, handleChange, handleClick }}
      >
        <SearchBrowser />
      </SearchContext.Provider>
    </div>
  );
}
