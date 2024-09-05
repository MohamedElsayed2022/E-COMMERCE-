import useDeleteData from "../../hooks/useDeleteData"
import { useGetDataToken } from "../../hooks/useGetData"
import { useInsertData } from "../../hooks/useInsertData"
import { ADD_TO_CART, CLEAR_ITEMS_CART, CLEAR_Items_CART, GET_PRODUCT_CART, GET_PRODUCTS_FROM_CART } from "../type"


// get products from cart  
export const getProductsFromCart =()=> async(dispatch)=>{
 try{
   const response = await useGetDataToken(`/api/v1/cart` )
   dispatch( {
    type : GET_PRODUCTS_FROM_CART ,
    payload : response 
   })
 }catch(e){
    dispatch( {
        type : GET_PRODUCTS_FROM_CART ,
        payload : e.response
       })
 }
}

// add  product to cart  
export const addProductToCart =(body)=> async(dispatch)=>{
    try{
      const response = await useInsertData(`/api/v1/cart` , body )
      dispatch( {
       type : ADD_TO_CART ,
       payload : response 
      })
    }catch(e){
       dispatch( {
           type : ADD_TO_CART ,
           payload : e.response
          })
    }
   }

   // show  items in cart  
export const productCart =()=> async(dispatch)=>{
  try{
    const response = await useGetDataToken(`/api/v1/cart`)
    dispatch( {
     type : GET_PRODUCT_CART ,
     payload : response 
    })
  }catch(e){
     dispatch( {
         type : GET_PRODUCT_CART ,
         payload : e.response
        })
  }
 }

    // clear items from cart  
export const clearItemsCart =()=> async(dispatch)=>{
  try{
    const response = await useDeleteData(`/api/v1/cart`)
    dispatch( {
     type : CLEAR_ITEMS_CART ,
     payload : response 
    })
  }catch(e){
     dispatch( {
         type : CLEAR_ITEMS_CART ,
         payload : e.response
        })
  }
 }

   