import { useState } from "react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
const SearchPeople = () => {
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
    <div>
      {/* <input
        onChange={handleChange}
        placeholder="Enter Your character"
        style={{ width: 250 }}
      />
      <button onClick={handleClick} style={{ marginLeft: 10 }}>
        Search
      </button>
      <div>Searching for {char}</div>
      <div>
        {loading ? (
          <div>Data is Loading ...</div>
        ) : (
          <ul>
            {results.map((char) => (
              <li key={char.name}>{char.name}</li>
            ))}
          </ul>
        )}
      </div> */}
      <div style={{ display: "flex" }}>
        <SearchInput />
        <SearchButton />
      </div>
      <SearchResults />
    </div>
  );
};

export default SearchPeople;
