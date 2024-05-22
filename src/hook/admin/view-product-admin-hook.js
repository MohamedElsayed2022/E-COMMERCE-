import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsPage } from "../../Redux/Actions/productsAction";
const ViewProductAdminHook = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(getAllProducts(10))
    },[])
    const allProducts = useSelector((state) => state.allproducts.allProducts);
    let items = []
    if(allProducts.data){
        items = allProducts.data
    }else{
        items = []

    }


    let pagination = []
    if(allProducts.paginationResult){
        pagination = allProducts.paginationResult
    }else{
        pagination = []

    }
      //get all products page number
    const getPage = (page)=>{
        dispatch(getAllProductsPage(page));
    
      }

   

    return [items , pagination , getPage]
}

export default ViewProductAdminHook
