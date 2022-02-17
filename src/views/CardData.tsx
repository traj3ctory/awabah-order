import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard,updateStep } from "../features/pizza/pizzaSlice";

const CardData = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    card_number: "",
    expiry: "",
    code: "",
  });
  const handleForm = (e: any) => {
    e.preventDefault();
    dispatch(addCard(data));
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleBack = (item: number) => {
    dispatch(updateStep(item));
  }
  return (
   <div className="form_container">
      <form onSubmit={handleForm}>
      <div>
        <label htmlFor="card_number">Card Number</label>
        <input
          type="text"
          id="card_number"
          name="card_number"
          placeholder="Enter your card_number ..."
          autoComplete="cc-number"
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div>
        <label htmlFor="expiry">Exp. date</label>
        <input
          type="date"
          id="expiry"
          name="expiry"
          placeholder="Enter your expiry ..."
          autoComplete="cc-exp"
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div>
        <label htmlFor="code">Card Security code</label>
        <input
          type="code"
          id="code"
          name="code"
          placeholder="Card security code."
          autoComplete="cc-csc"
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <button type="submit" onClick={(e) => handleBack(1)}>{"<< "}Prev</button>
      <span>{"  "}</span>
      <button type="submit">Next {" >>"}</button>
    </form>
   </div>
  );
};
export default CardData;
