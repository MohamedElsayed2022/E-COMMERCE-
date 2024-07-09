import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsPage,
  getAllProductsSearch,
} from "../../Redux/Actions/productsAction";

const ViewSearchProductsHook = () => {
  const dispatch = useDispatch();
  const limit = 6;

  const getProduct = async () => {
    let word = localStorage.getItem("searchWord") || "";
    let queryCat = ""
    if(localStorage.getItem("catChecked") !== ""){
      queryCat = localStorage.getItem("catChecked")
    }

    sortData();
    await dispatch(
      getAllProductsSearch(`sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}`)
    );
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
    let queryCat= ""
    if(localStorage.getItem("catChecked") !== ""){
      queryCat = localStorage.getItem("catChecked")
    }

    sortData()
    await dispatch(
      getAllProductsSearch(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}`)
    );
  };
  //sort data
  let sortType = "",
    sort;
  const sortData = async () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
      // await dispatch(getAllProductsSearch(`limit=${limit}&keyword=${word}&sort=price_desc`));
    } else {
      sortType = "";
    }
    // if(sortType === "السعر من الاعلى الى الاقل")
    // {
    //     sort = "-price"
    // }else if(sortType === "السعر من الاقل الى الاعلى")
    // {
    //     sort = "+price"
    // }
    switch (sortType) {
      case (sortType = "السعر من الاعلى الى الاقل"):
        sort = "-price";
        break;
      case (sortType = "السعر من الاقل الى الاعلى"):
        sort = "+price";
        break;
        case (sortType = "بدون ترتيب"):
        sort = "";
        break;
        case (sortType = "الاكثر تقييما"):
            sort = "-quantity";
            break;
            case (sortType = "الاكثر مبيعا"):
            sort = "+quantity";
            break;
      default:
        sort = "";
        break;
    }
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