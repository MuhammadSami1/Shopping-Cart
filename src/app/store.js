import { configureStore } from "@reduxjs/toolkit";
import getUser from "../features/getUser";


export const store = configureStore({
    reducer: {
        app: getUser
    },
});