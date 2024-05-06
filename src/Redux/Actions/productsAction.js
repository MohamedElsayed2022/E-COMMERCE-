import { CREATE_PRODUCT, GET_ALL_PRODUCTS, GET_ERROR } from "../type"
import { useInsertDataWithImage } from "../../hooks/useInsertData"
import useGetData from "../../hooks/useGetData"

export const createProduct =(data)=> async(dispatch)=>{
    try{
      const response = await useInsertDataWithImage(`/api/v1/products` , data )
      console.log(response.data)
      dispatch( {
       type : CREATE_PRODUCT,
       payload : response ,
       loading : true
      })
    }catch(e){
       dispatch( {
           type : GET_ERROR ,
           payload :"ERROR : " + e 
          })
    }
}

//get sub-category depend on category id

export const getAllProducts =(id)=> async(dispatch)=>{
  try{
    const response = await useGetData(`/api/v1/products`)
    console.log(response.data)
    dispatch( {
     type : GET_ALL_PRODUCTS,
     payload : response ,
     loading : true
    })
  }catch(e){
     dispatch( {
         type : GET_ERROR ,
         payload :"ERROR : " + e 
        })
  }
}