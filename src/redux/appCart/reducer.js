import {INC_COUNT, DEC_COUNT, ADD_TO_CART, DLT_TO_CART} from "./actionType"


const init = {
    count:0,
    cart:[]
}


export const reducer = (store = init, {type, payload}) => {
    switch(type){
        case INC_COUNT:
            return {...store, count:store.count + payload}
            case DEC_COUNT:
                return {...store, count:store.count - payload}
                case ADD_TO_CART:
                    return {...store,cart:[...store.cart, payload]}
                    case DLT_TO_CART:
                        const data = store.cart.filter((el) => el._id!==payload)

                        return {...store, cart:data}
            default:
                return {...store}
    } 
}