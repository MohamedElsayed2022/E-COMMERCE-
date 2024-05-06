import {combineReducers} from 'redux'
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducer'
import subcategoryReducer from './subcategoryReducer'
import productReducer from './productsReducer'
export default combineReducers({
    allcategory : categoryReducer,
    allbrand: brandReducer,
    subcategory : subcategoryReducer,
    allproducts : productReducer

})