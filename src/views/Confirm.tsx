import { useState } from "react";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { updateStep } from "../features/pizza/pizzaSlice";

const Confirm = () => {
  const [data, setData] = useState(false);
  const datar = useSelector((state: RootStateOrAny) => state.pizzas);
  const { details, order, total } = datar;
  const dispatch = useDispatch();

  const handleClick = (item: number) => {
    console.log("data =>",details, order, total);
    dispatch(updateStep(item));
  };

  return (
    <div className="confirm_container">
      <div>
        <h4>Order Summary:</h4>
        {order.map((pizza: any, i: number) => (
          <ul key={i}>
            <li>Name: {pizza.type}</li>
            <li>Size: {pizza.size}</li>
          </ul>
        ))}
      </div>
      <div>
        <h4>User Details</h4>
        <ul>
          <li>
            Name: {details.lastname}&nbsp;{details.firstname}
          </li>
          <li>Email: {details.email}</li>
          <li>Address: {details.street_address}</li>
        </ul>
      </div>
      <h4>Total-Price: {"$"}{ total } </h4>
      <label htmlFor="terms">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          checked={data}
          onChange={(e) => setData(e.target.checked)}
        />{" "}
        Agree to our terms and conditions
      </label>
      <button type="submit" onClick={(e) => handleClick(4)}>
        Confirm Order
      </button>
    </div>
  );
};
export default Confirm;
