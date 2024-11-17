import { CREATE_BRAND, GET_ALL_BRANDS, GET_ALL_ORDERS, GET_ERROR, GET_ONE_BRAND, GET_ORDERS_PAGE } from "../type"

const inital = {
    allorders:[],
    orderPage :[],
    loading : true,

}
const ordersReducer = (state = inital , action)=>{
    switch(action.type){
        case GET_ALL_ORDERS: 
            return {...state , allorders :action.payload , loading : false}
            case GET_ORDERS_PAGE: 
            return {...state , orderPage :action.payload , loading : false}
           
            case GET_ERROR :
                return {...state , allorders : action.payload , loading : true}
                
            default :
            return state
    }
}

export default ordersReducer