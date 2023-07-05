import { useContext } from "react";
import SearchContext from "../context/SearchContext";

const SearchButton = () => {
  const { handleClick } = useContext(SearchContext);
  return (
    <div>
      <button onClick={handleClick} style={{ marginLeft: 10 }}>
        Search
      </button>
    </div>
  );
};

export default SearchButton;
