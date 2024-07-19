import React from "react";
import { useContext,createContext } from "react";

export const CartContext=createContext({
cartCount:0,
cartItems:[],
setCartItems:()=>{},
setCartCount:()=>{}

});
export const CartContextProvider= CartContext.Provider;
export default function useCart(){
return useContext(CartContext);
};