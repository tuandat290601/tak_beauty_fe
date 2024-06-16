import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productApi } from "../api";

export const product = createSlice({
    name: "product",
    initialState: {
        productList: [],
        mostDiscountList: [],
        mostSoldList: [],
    },
    reducers: {
        setMostDiscountList: (state, action) => {
            state.mostDiscountList = action.payload
        },
        setMostSoldList: (state, action) => {
            state.mostSoldList = action.payload
        }
    },
});

export const { productList, mostDiscountList, mostSoldList, setMostDiscountList, setMostSoldList } = product.actions;

export default product.reducer;
