 import {INC_COUNT, DEC_COUNT, ADD_TO_CART, DLT_TO_CART} from "./actionType"

export const IncCount = (payload) => ({
    type:INC_COUNT,
    payload
})

export const DecCount = (payload) => ({
    type:DEC_COUNT,
    payload
})

export const AddToCart = (payload) => ({
    type:ADD_TO_CART,
    payload
})

export const DltToCart = (id) => ({
type:DLT_TO_CART,
payload:id
})


 