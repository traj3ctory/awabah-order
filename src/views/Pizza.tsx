/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Pizza = () => {
  const pizzas = useSelector((state: RootStateOrAny) => state.pizzas);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

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
    console.log(pizza);
  };

  return (
    <>
      <div className="card_container">
        {pizzas ? (
          pizzas.map((pizza: Pizza, i: number) => (
            <div
              key={i}
              className="card_list"
              onClick={() => handleSelect(pizza)}
            >
              <Card data={pizza} />
            </div>
          ))
        ) : (
          <p>No pizzas</p>
        )}
      </div>
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
