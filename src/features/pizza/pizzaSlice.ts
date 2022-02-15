import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/pizzalist.json";

const initialState = [...data];

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
});

export default pizzasSlice.reducer;
