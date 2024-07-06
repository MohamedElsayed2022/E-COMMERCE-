import React, { useEffect, useState } from 'react'
import ViewSearchProductsHook from '../product/view-search-products-hook'

const NavbarSearchHook = () => {
    const [items , pagination , onPress , getProduct , results] = ViewSearchProductsHook()
    const [searchWord , setSearchWord] = useState('')
    const OnChangeSearch = (e)=>{
        localStorage.setItem("searchWord" ,e.target.value )
        console.log(e.target.value)
        setSearchWord(e.target.value)

    }
    useEffect(()=>{
         setTimeout(() => {
             getProduct()
         }, 1000);
    },[searchWord])
    return [ OnChangeSearch , searchWord ]
  
}

export default NavbarSearchHook
