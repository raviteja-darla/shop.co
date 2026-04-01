import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMobileProductsAPI } from "./mobileProductAPI";

export const fetchMobileProducts = createAsyncThunk("mobileProducts/fetchMobileProducts", async () => {
    const data = await fetchMobileProductsAPI();
    return data.products;
});

const mobileProductSlice = createSlice({
    name: "mobileProducts",
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMobileProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMobileProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchMobileProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default mobileProductSlice.reducer;