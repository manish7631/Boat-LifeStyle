import {INC_COUNT, DEC_COUNT} from "./actionType"


const init = {
    count:0,
}


export const reducer = (store = init, {type, payload}) => {
    switch(type){
        case INC_COUNT:
            return {...store, count:store.count + payload}
            case DEC_COUNT:
                return {...store, count:store.count - payload}
            default:
                return {...store}
    } 
}