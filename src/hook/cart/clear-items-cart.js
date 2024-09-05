import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearItemsCart } from '../../Redux/Actions/cartAction'
import notify from '../useNotification'

const ClearItemsCart = () => {
 const dispatch = useDispatch()
 const [loading , setLoading] = useState(true)
 const res = useSelector((state)=>state.cart.clearItems)

 const handleSubmit = async()=>{
   setLoading(true)
   await dispatch(clearItemsCart())
   setLoading(false)

 }
 useEffect(()=>{
     if(loading === false){
      if (res === "") {
        console.log(res)
        notify("تم حذف جميع المنتجات "  , "success")
        setTimeout(() => {
          window.location.reload(false)
        }, 1000);
      }else{
        notify("حدثت مشكاة اثناء الحذف", "error")
      }
      
     }
 },[loading])

 return [handleSubmit]
}

export default ClearItemsCart
