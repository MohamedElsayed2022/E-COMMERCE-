import {  CREATE_PRODUCT, GET_ALL_PRODUCTS, GET_ERROR } from "../type"

const inital = {
    products:[],
    allProducts:[],
    loading : true,

}
const productReducer = (state = inital , action)=>{
    switch(action.type){
        case GET_ALL_PRODUCTS: 
            return {...state , allProducts :action.payload , loading : false}
            case CREATE_PRODUCT:
                    return {
                        products : action.payload ,
                        loading : false
                    }
            case GET_ERROR :
                return {...state , products : action.payload , loading : true}
                
            default :
            return state
    }
}

export default productReducer