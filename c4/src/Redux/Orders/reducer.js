import {ORDERS, SORT} from './action'

let init = {Orders:[]}
export const OrderReducer = (store=init,action)=>{
    switch(action.type){
        case ORDERS:
            return {...store,Orders:action.payload}
            case SORT:
                return {...store, Orders: [...store.Orders].sort((a,b)=>a[action.payload]>b[action.payload]?1:a[action.payload]<b[action.payload]?-1:0)};
        default:
            return store
    }
}