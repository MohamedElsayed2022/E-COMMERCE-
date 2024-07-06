import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsPage, getAllProductsSearch } from "../../Redux/Actions/productsAction";

const ViewSearchProductsHook = () => {
    const dispatch = useDispatch();
    const limit = 6;

    const getProduct = async () => {
        let word = localStorage.getItem("searchWord") || "";
        await dispatch(getAllProductsSearch(`limit=${limit}&keyword=${word}`));
    };

    useEffect(() => {
        getProduct();
    }, []); // Only run once on component mount

    const allProducts = useSelector((state) => state.allproducts.allProducts);

    const items = allProducts?.data || [];
    const pagination = allProducts?.paginationResult?.numberOfPages || [];
    const results = allProducts?.results || 0;

    const onPress = async (page) => {
        let word = localStorage.getItem("searchWord") || "";
        await dispatch(getAllProductsSearch(`limit=${limit}page=${page}&keyword=${word}`));
    };

    return [items, pagination, onPress, getProduct, results];
};

export default ViewSearchProductsHook;





























// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {  getAllProductsPage, getAllProductsSearch } from "../../Redux/Actions/productsAction";

// const ViewSearchProductsHook = () => {
//     const dispatch = useDispatch();
//     let limit = 6
   

//     const getProduct = async()=>{
//         let word =""
//         if(localStorage.getItem("searchWord") != null)
//             word = localStorage.getItem("searchWord")
//       await dispatch(getAllProductsSearch(`limit=${limit}&keyword=${word}`))
//     }
//     useEffect(()=>{
//         getProduct('')
//     },[])
//     const allProducts = useSelector((state) => state.allproducts.allProducts);
//     let items = []
//     let pagination = []
//     let results = 0
//     if(allProducts.data){
//         items = allProducts.data
//     }else{
//         items = []

//     }
//     if(allProducts.paginationResult){
//         pagination = allProducts.paginationResult.numberOfPages

//     }else{
//         pagination = []
//     }
//     if(allProducts.results){
//         results = allProducts.results

//     }else{
//         results = 0
//     }
//     const onPress = async (page)=>{
//         await dispatch(getAllProductsPage(page , limit))

//     }
    

//     return [items , pagination , onPress , getProduct , results]

// }

// export default ViewSearchProductsHook
