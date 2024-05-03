import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllBrand } from "../../Redux/Actions/brandAction";
const HomeBrandHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrand());
  }, []);
  const brand = useSelector((state) => state.allbrand.brand);
  const loading = useSelector((state) => state.allbrand.loading);
  

  return [  brand , loading ]

}

export default HomeBrandHook
