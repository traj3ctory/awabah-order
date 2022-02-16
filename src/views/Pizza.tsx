/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import OrderView from "./OrderView";
import { addOrder } from "../features/pizza/pizzaSlice";

const Pizza = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pizzas = useSelector((state: RootStateOrAny) => state.pizzas);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePrevPage = (prevPage: number) => {
    setPage((prevPage: number) => prevPage - 1);
  };

  const handleNextPage = (nextPage: number) => {
    setPage((nextPage: number) => nextPage + 1);
  };
  interface Pizza {
    type: string;
    quantity: number;
    size: string;
  }

  const handleSelect = (pizza: Pizza) => {
    dispatch(addOrder(pizza));
  };

  return (
    <>
      <Search />
      <div className="card_container">
        <main>
          {pizzas.data.length > 0 ? (
            pizzas.data.map((pizza: Pizza, i: number) => (
              <div
                key={i}
                className="card_list"
                onClick={() => handleSelect(pizza)}
              >
                <Card data={pizza} />
              </div>
            ))
          ) : (
            <h2 style={{textAlign: 'center', width: '100%'}}>No pizzas</h2>
          )}
        </main>
        <OrderView />
      </div>
      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </>
  );
};
export default Pizza;
