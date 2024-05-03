import {  CREATE_SUBCATEGORY, GET_ALL_SUBCATEGORIES, GET_ERROR } from "../type"

const inital = {
    subcategory:[],
    loading : true,

}
const subcategoryReducer = (state = inital , action)=>{
    switch(action.type){
            case CREATE_SUBCATEGORY:
                    return {
                        subcategory : action.payload ,
                        loading : false
                    }
            case GET_ERROR :
                return {...state , subcategory : action.payload , loading : true}
                
            default :
            return state
    }
}

export default subcategoryReducer