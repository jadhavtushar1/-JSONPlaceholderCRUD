import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./slicer";

export const store = configureStore({
    reducer : {
        crud:crudReducer
    }
})