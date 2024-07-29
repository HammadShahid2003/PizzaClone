import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cartSlice"
import pizzasReducer from "../PizzaSlice";


export default configureStore({
    reducer:{
        cart: cartReducer,
        pizzas: pizzasReducer,
    }
});