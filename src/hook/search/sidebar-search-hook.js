import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/Actions/categoryAction';
import { getAllBrand } from '../../Redux/Actions/brandAction';

const SidebarSearchHook = () => {
    const dispatch = useDispatch();
    const AllCategories = useSelector((state) => state.allcategory.category);
    const AllBrands = useSelector((state) => state.allbrand.brand);
        useEffect(() => {
            const get = async()=>{
              await dispatch(getAllCategory());
               await dispatch(getAllBrand());
            }
            get()
            
        }, []);

        //to get category
        let category = []
        if(AllCategories.data)
            category = AllCategories.data

        //to get brand
        let brand = []
        if(AllBrands.data)
            brand = AllBrands.data
        

    return [category , brand]
}

export default SidebarSearchHook