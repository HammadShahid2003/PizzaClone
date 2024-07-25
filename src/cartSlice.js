import { createSlice } from "@reduxjs/toolkit";

const initialState={items:[]};

export const cartSlice=createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
          state.items=[...state.items,action.payload];
        },
        removeFromCart:(state,action)=>{
           state.items=state.items.filter((item)=>{
           return item.pid!=action.payload;
           })
        },
        increaseQuantity:(state,action)=>{
            let updatedItem={...state.items.find(item=>item.pid==action.payload)};
            updatedItem.Quantity++;
            state.items=state.items.map((item)=>
            item.pid==action.payload?updatedItem:item);

        },
        decreaseQuantity:(state,action)=>{
            let updatedItem={...state.items.find(item=>item.pid==action.payload)};
            updatedItem.Quantity--;
            state.items=state.items.map((item)=>
            item.pid==action.payload?updatedItem:item);

        },
    }

})
 
export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity}=cartSlice.actions;

export default cartSlice.reducer;