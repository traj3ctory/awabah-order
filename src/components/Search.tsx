import { useDispatch } from "react-redux";
import { updateData } from "../features/pizza/pizzaSlice";

const Search = () => {
  const dispatch = useDispatch();
  const handleSearch = (event: any) => {
    event.preventDefault();
    const { value } = event.target;
    dispatch(updateData(value));
  };

  return (
    <div className="form_container float-right">
      <label htmlFor="search">Search</label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Enter search text"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};
export default Search;
