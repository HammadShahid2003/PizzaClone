import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
    pizza: null,
    loading: false,
    error: null,
};

// Define the async thunk to fetch pizza data
export const fetchPizza = createAsyncThunk('fetchPizza', async () => {
    try {
        const response = await axios.get("http://localhost:3000/pizzas");
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
});

// Create the pizza slice
const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizza.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPizza.fulfilled, (state, action) => {
                state.loading = false;
                state.pizza = action.payload;
            })
            .addCase(fetchPizza.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Export the pizza actions and reducer
export const pizzaActions = pizzaSlice.actions;
export default pizzaSlice.reducer;