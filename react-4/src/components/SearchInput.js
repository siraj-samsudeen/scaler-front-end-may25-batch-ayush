import { useContext } from "react";
import SearchContext from "../context/SearchContext";

const SearchInput = () => {
  // const val = useContext(SearchContext);
  // console.log(val);
  const { handleChange } = useContext(SearchContext);
  return (
    <div>
      <input
        onChange={handleChange}
        placeholder="Enter Your character"
        style={{ width: 250 }}
      />
    </div>
  );
};

export default SearchInput;
