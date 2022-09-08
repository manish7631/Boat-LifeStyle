 import {INC_COUNT, DEC_COUNT} from "./actionType"

export const IncCount = (payload) => ({
    type:INC_COUNT,
    payload
})

export const DecCount = (payload) => ({
    type:DEC_COUNT,
    payload
})


 