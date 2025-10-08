
import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./Reducers/UserReducer"




const store = configureStore({

    reducer: {

        user: userReducer


    }
})


export type AppDispatch = typeof store.dispatch;

export type RootState =  typeof store;

export default store