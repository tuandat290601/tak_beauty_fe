import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./features/productSlice.js"
import pageControlReducer from "./features/pageControlSlice.js";

const store = configureStore({
    reducer: {
        product: productReducer,
        pageControl: pageControlReducer
    },
})

export default store