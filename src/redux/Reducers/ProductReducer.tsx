import { createAction, createReducer, type ActionReducerMapBuilder } from "@reduxjs/toolkit"
import type { Product } from "../../types/Types"
import { products } from "../../data/Products"





interface IOnSaleProducts {
    onSaleproducts: Product[]
    loading: boolean
    message: string
}


const intialState: IOnSaleProducts = {
    onSaleproducts: products,
    loading: false,
    message: ""
}


export const productReqApi = createAction("PRODUCT_REQ_API");    // only action name is mentioned 

export const productReqSuccess = createAction<Product>("PRODUCT_REQ_SUCCESS");   // 

export const productReqApiFailure = createAction("PRODUCT_REQ_API_FAILURE");



export const productReducer = createReducer(intialState, (builder: ActionReducerMapBuilder<IOnSaleProducts>) => {

    builder.addCase(productReqApi, (state) => {
        state.loading = true
    })

    builder.addCase(productReqSuccess, (state, action) => {
        // state = action.payload
        Object.assign(state.onSaleproducts, action.payload)
        state.loading = false
    })

    builder.addCase(productReqApiFailure, (state) => {
        state.loading = false
    })

})