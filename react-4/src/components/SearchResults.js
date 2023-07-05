import { useContext } from "react";
import SearchContext from "../context/SearchContext";

const SearchResults = () => {
  const { char, loading, results } = useContext(SearchContext);
  return (
    <div>
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
      </div>
    </div>
  );
};

export default SearchResults;
