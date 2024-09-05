import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productCart } from '../../Redux/Actions/cartAction'
import notify from '../useNotification'

const ViewProductInCart = () => {
    const prod = useSelector((state)=>state.cart.productInCart)
    const [loading , setLoading] = useState(true)
    const [cartNum , setCartNum] = useState(null)
    const dispatch = useDispatch()
    useEffect(()=>{
         const get = async()=>{
            setLoading(true)
           await dispatch(productCart())
           setLoading(false)
         }
         get()
    },[])

    useEffect(()=>{
        if(loading === false){
            if(prod && prod.status === "success"){
                setCartNum(prod.numOfCartItems)
            }
        }

    },[loading])

    let products = []
    if(prod && prod.data) 
        products = prod.data.products
        


    

    return [cartNum , products]
    
}
export default ViewProductInCart