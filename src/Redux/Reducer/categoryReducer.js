import { CREATE_CATEGORY, GET_ALL_CATEGORIES, GET_ERROR } from "../type"

const inital = {
    category:[],
    loading : true,

}
const categoryReducer = (state = inital , action)=>{
    switch(action.type){
        case  GET_ALL_CATEGORIES :
            return {...state , category :action.payload , loading : false}
            case CREATE_CATEGORY:
                    return {
                        category : action.payload ,
                        loading : false
                    }
            case GET_ERROR :
                return {...state , category : action.payload , loading : true}
                
            default :
            return state
    }
}

export default categoryReducer