import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/pizzalist.json";
import { Pizza, User } from "../../types";

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState: {
    data: [...data],
    order: [] as Array<Pizza>,
    details: {} as User,
    card: {} as User,
    step: 1,
    total: 0,
  },
  reducers: {
    updateStep(state, action) {
      state.step = action.payload;
      if(state.step === 4) {
        state.total = 0;
      }
    },
    addOrder(state, action) {
      const { payload } = action;
      state.order.push(payload);
      if(payload.size === "small") {
        state.total += 10;
      } else if (payload.size === "medium") {
        state.total += 20;
      } else if(payload.size === "large") {
        state.total += 30;
      } else {
        state.total += 0
      };
    },
    removeOrder(state, action) {
      const { type } = action.payload;
      state.order = state.order.filter((item) => item.type !== type);
    },
    updateData: (state, action) => {
      const { payload } = action;
      if (payload === "") {
        state.data = [...data];
        return;
      }
      const newData = state.data.filter(
        (pizza) =>
          pizza.type.toLowerCase().includes(payload.toLowerCase()) ||
          pizza.size.toLowerCase().includes(payload.toLowerCase())
      );
      state.data = newData;
      return;
    },
    addDetails(state, action) {
      const { payload } = action;
      state.details = { ...state.details, ...payload};
      state.step = 2;
    },
    addCard(state, action) {
      const { payload } = action;
      state.card = { ...state.card, ...payload};
      state.step = 3;
    },
  },
});

export const { updateStep, addOrder, removeOrder, updateData, addDetails, addCard } =
  pizzasSlice.actions;
export default pizzasSlice.reducer;
