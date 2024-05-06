import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/productsAction";
import { useEffect } from "react";
const ViewHomeProductsHook = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allproducts.allProducts);
  useEffect(() => {
    dispatch(getAllProducts());
    console.log(allProducts.data);
  }, []);
  let items = []
  if (allProducts.data) {
    items = allProducts.data.slice(0 , 4)
  }else{
    items = []
  }
  return [items]
};

export default ViewHomeProductsHook;
