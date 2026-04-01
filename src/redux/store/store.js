import { configureStore } from "@reduxjs/toolkit";
import mobileProductsReduer from './../features/mobileProducts/mobileProductSlice'

export const store = configureStore({
    reducer: {
        mobileProducts: mobileProductsReduer
    }
});