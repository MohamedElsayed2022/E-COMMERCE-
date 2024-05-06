import useGetData from "../../hooks/useGetData"
import { useInsertDataWithImage } from "../../hooks/useInsertData"
import { CREATE_BRAND, GET_ALL_BRANDS, GET_ERROR } from "../type"

export const getAllBrand =(limit)=> async(dispatch)=>{
 try{
   const response = await useGetData(`/api/v1/brands/?limit=${limit}`)
   dispatch( {
    type : GET_ALL_BRANDS ,
    payload : response 
   })
 }catch(e){
    dispatch( {
        type : GET_ERROR ,
        payload :"ERROR : " + e 
       })
 }
}

export const getAllBrandPage =(page)=> async(dispatch)=>{
  try{
    const response = await useGetData(`/api/v1/brands/?limit=12&page=${page}`)
    dispatch( {
     type : GET_ALL_BRANDS ,
     payload : response 
    })
  }catch(e){
     dispatch( {
         type : GET_ERROR ,
         payload :"ERROR : " + e 
        })
  }
 }

 export const createBrand =(formData)=> async(dispatch)=>{
  try{
    const response = await useInsertDataWithImage(`/api/v1/brands` , formData)
    dispatch( {
     type : CREATE_BRAND,
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