import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeOrder } from "../features/pizza/pizzaSlice";
import { Pizza } from "../types";

const OrderView = () => {
  const pizzas = useSelector((state: RootStateOrAny) => state.pizzas);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/process");
  };

  return (
    <div className="table_container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.order.length > 0 ? (
            pizzas.order.map((pizza: Pizza, i: number) => (
              <tr key={i}>
                <td>{pizza.type}</td>
                <td>{pizza.quantity}</td>
                <td>{pizza.size}</td>
                <td onClick={(e) => dispatch(removeOrder(pizza))} ><span className="remove_item">X</span></td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={{ textAlign: "center" }} colSpan={4}>
                Select a pizza
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button type="submit" onClick={handleProceed}>
        Proceed
      </button>
    </div>
  );
};
export default OrderView;
