import useDeleteData from "../../hooks/useDeleteData"
import {useGetData, useGetDataToken }from "../../hooks/useGetData"
import { useInsertData } from "../../hooks/useInsertData"
import { useUpdateData } from "../../hooks/useUpdateData"
import { ADD_COUPON, DELETE_COUPON, EDIT_COUPON, GET_ALL_COUPONS, GET_ONE_COUPON } from "../type"


//create a new coupon
export const addCoupon =(body)=> async(dispatch)=>{
    try{
      const response = await useInsertData(`/api/v1/coupons` , body )
      console.log(response.data)
      dispatch( {
       type : ADD_COUPON,
       payload : response ,
       loading : true
      })
    }catch(e){
       dispatch( {
           type : ADD_COUPON ,
           payload : e.response
          })
    }
}

// get all coupons
export const getAllCoupons =()=> async(dispatch)=>{
    try{
      const response = await useGetDataToken(`/api/v1/coupons` )
      console.log(response.data)
      dispatch( {
       type : GET_ALL_COUPONS,
       payload : response ,
       loading : true
      })
    }catch(e){
       dispatch( {
           type : GET_ALL_COUPONS ,
           payload : e.response
          })
    }
}

// delete one coupon
export const deleteCoupon =(couponID)=> async(dispatch)=>{
    try{
      const response = await useDeleteData(`api/v1/coupons/${couponID}` )
      console.log(response.data)
      dispatch( {
       type : DELETE_COUPON,
       payload : response ,
       loading : true
      })
    }catch(e){
       dispatch( {
           type : DELETE_COUPON ,
           payload : e.response
          })
    }
}

// edit one coupon
export const getOneCoupon =(couponID)=> async(dispatch)=>{
  try{
    const response = await useGetDataToken(`/api/v1/coupons/${couponID}` )
    console.log(response.data)
    dispatch( {
     type : GET_ONE_COUPON,
     payload : response ,
     loading : true
    })
  }catch(e){
     dispatch( {
         type : GET_ONE_COUPON ,
         payload : e.response
        })
  }
}

// get one coupon
export const editCoupon =(couponID)=> async(dispatch)=>{
  try{
    const response = await useUpdateData(`/api/v1/coupons/${couponID}` )
    console.log(response.data)
    dispatch( {
     type : EDIT_COUPON,
     payload : response ,
     loading : true
    })
  }catch(e){
     dispatch( {
         type : EDIT_COUPON ,
         payload : e.response
        })
  }
}


