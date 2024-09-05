import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productCart } from '../../Redux/Actions/cartAction'
import notify from '../useNotification'
import { getOneProduct } from '../../Redux/Actions/productsAction'

const ViewProductInCart = (product) => {
    const prod = useSelector((state)=>state.cart.productInCart)
    const [loading , setLoading] = useState(true)
    const [cartNum , setCartNum] = useState(null)
    const [cartItems , setCartItems] = useState([])

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
                setCartItems(prod.data.products)
            }else{
                setCartNum(0)
                setCartItems([])
            }
        }

    },[loading])




  


    

    return [cartNum , cartItems]
    
}
export default ViewProductInCart