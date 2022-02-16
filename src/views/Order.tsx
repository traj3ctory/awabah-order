import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import UserDetail from "./UserDetails";
import CardData from "./CardData";
import Confirm from "./Confirm";
import Progress from "../components/Progress";
import Success from "../components/Success";

const Order = () => {
  const pizzas = useSelector((state: RootStateOrAny) => state.pizzas);
  const { step } = pizzas;

  return (
    <>
      <Progress />
      {step === 1 && <UserDetail />}
      {step === 2 && <CardData />}
      {step === 3 && <Confirm />}
      {step === 4 && <Success />}
    </>
  );
};

export default Order;
