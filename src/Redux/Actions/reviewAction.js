import { CREATE_REVIEW, GET_ALL_REVIEWS, GET_ERROR } from "../type"
import { useInsertData } from "../../hooks/useInsertData"
import { useGetData } from "../../hooks/useGetData"

export const createReview =( id , data )=> async(dispatch)=>{
    try{
      const response = await useInsertData(`/api/v1/products/${id}/reviews` , data )
      dispatch( {
       type : CREATE_REVIEW,
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

export const getAllReviews =(id)=> async(dispatch)=>{
  try{
    const response = await useGetData(`/api/v1/products/${id}/reviews`)
    console.log(response.data)
    dispatch( {
     type : GET_ALL_REVIEWS,
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