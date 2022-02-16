import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { updateStep } from "../features/pizza/pizzaSlice";

const Progress = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootStateOrAny) => state.pizzas);
  const { step } = data;
  const handleClick = (item: number) => {
    dispatch(updateStep(item));
  };
  return (
    <div className="progress">
      <span
        onClick={(e) => handleClick(1)}
        className={`${step === 1 ? "active" : ""}`}
      >
        Step 1
      </span>
      <span
        onClick={(e) => handleClick(2)}
        className={`${step === 2 ? "active" : ""}`}
      >
        Step 2
      </span>
      <span
        onClick={(e) => handleClick(3)}
        className={`${step === 3 ? "active" : ""}`}
      >
        Step 3
      </span>
      <span
        onClick={(e) => handleClick(4)}
        className={`${step === 4 ? "active" : ""}`}
      >
        step 4
      </span>
    </div>
  );
};

export default Progress;
