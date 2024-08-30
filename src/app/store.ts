import { configureStore } from "@reduxjs/toolkit";
import cartItemSlice from "../features/cart-items/cartItemSlice";
import categorySlice from "../features/categories/categorySlice"
import usersSlice from "../features/user-information/usersSlice";



export const store = configureStore({
    reducer:{
        cartItems:cartItemSlice,
        categories:categorySlice,
        users:usersSlice
    }
});


export type RootState = ReturnType< typeof store.getState>
export type AppDispatch = typeof store.dispatch