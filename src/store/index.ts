import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from '../features/pizza/pizzaSlice';

export const store = configureStore({
  reducer: {
    pizzas: pizzaReducer,
  },
});
