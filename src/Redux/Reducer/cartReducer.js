import { ADD_TO_CART, CLEAR_ITEMS_CART, CLEAR_Items_CART, CREATE_ADDRESS, CREATE_BRAND, DELETE_ADDRESS, GET_ALL_ADDRESSES, GET_ALL_BRANDS, GET_ERROR, GET_ONE_ADDRESS, GET_ONE_BRAND, GET_PRODUCT_CART, GET_PRODUCTS_FROM_CART, UPDATE_ADDRESS } from "../type"

const inital = {
    productsInCart:[],
    addToCart : [],
    productInCart :[],
    clearItems : [],
    loading : true,

}
const cartReducer = (state = inital , action)=>{
    switch(action.type){
        
            case GET_PRODUCTS_FROM_CART:
                    return {
                        productsInCart : action.payload ,
                        loading : false
                    }
                    case GET_PRODUCT_CART:
                        return {
                            productInCart : action.payload ,
                            loading : false
                        }
                    case ADD_TO_CART:
                    return {
                        addToCart : action.payload ,
                        loading : false
                    }
                    case CLEAR_ITEMS_CART:
                        return {
                            clearItems : action.payload ,
                            loading : false
                        }
            
          
            default :
            return state
    }
}

export default cartReducer