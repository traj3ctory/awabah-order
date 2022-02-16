import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDetails } from "../features/pizza/pizzaSlice";

const UserDetail = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    street_address: "",
  });
  const handleForm = (e: any) => {
    e.preventDefault();
    dispatch(addDetails(data));
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
   <div className="form_container">
      <form onSubmit={handleForm}>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Enter your lastname ..."
          autoComplete="family-name"
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Enter your firstname ..."
          autoComplete="given-name"
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email ..."
          autoComplete="email"
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div>
        <label htmlFor="street_address">Street Address</label>
        <input
          type="text"
          id="street_address"
          name="street_address"
          placeholder="Enter your street address ..."
          autoComplete="street-address"
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
   </div>
  );
};
export default UserDetail;
