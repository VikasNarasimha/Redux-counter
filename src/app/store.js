import { configureStore } from "@reduxjs/toolkit";
import counterred from "../features/counter/CounterSlice";
const store = configureStore({
    reducer:{
        counter: counterred
    }
})
export default store;