import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/categoryAction";
import { getAllBrand } from "../../Redux/Actions/brandAction";
import { getOneCategory } from "../../Redux/Actions/subcategoryAction";
import {
  createProduct,
  getAllProducts,
  getOneProduct,
} from "../../Redux/Actions/productsAction";
import notify from "../../hook/useNotification";
import { useEffect, useState } from "react";

const AdminEditProductHook = (id) => {
  const [images, setImages] = useState([]);
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكمية المتاحة");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
  const [CatID, setCatID] = useState("");
  const [BrandID, setBrandID] = useState("");
  const [selectedSubID, setSelectedSubID] = useState([]);
  const [showColor, setShowColor] = useState(false);
  const [colors, setColors] = useState([]);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const category = useSelector((state) => state.allcategory.category);
  const brand = useSelector((state) => state.allbrand.brand);
  const subcategory = useSelector((state) => state.subcategory.subcategory);
  const product = useSelector((state) => state.allproducts.products);
  const item = useSelector((state) => state.allproducts.oneProduct);

  useEffect(() => {
    // if(product)
        const run = async ()=>{
           await dispatch(getAllProducts());
           await dispatch(getAllBrand())
           await dispatch(getOneProduct(id));
        }
        run()
   

  }, []);

  useEffect(()=>{
      if(item.data)
        {
            setProdName(item.data.title)
            setProdDescription(item.data.description)
            setPriceAfter(item.data.price)
            setPriceBefore(item.data.priceBefore)
            setQty(item.data.quantity)
            setCatID(item.data.category)
            setBrandID(item.data.brand)
            setSelectedSubID(item.data.subCategoryID)
            setColors(item.data.availableColors)
            setOptions(item.data.subCategoryID)
            
        }
  },[item])
 

  // if (category) console.log(category.data);

  useEffect(() => {
    dispatch(getAllCategory());
    // dispatch(getAllBrand());
  }, []);
  useEffect(() => {
    dispatch(getAllBrand());
  }, []);
  const onSelect = (selectedList) => {
    setSelectedSubID(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubID(selectedList);
  };
  const onSelectCategory = async (e) => {
    if (e.target.value != 0) {
      await dispatch(getOneCategory(e.target.value));
    }

    setCatID(e.target.value);
  };
  useEffect(() => {
    if (CatID != 0) {
      if (subcategory.data) {
        setOptions(subcategory.data);
      }
    }
  }, [CatID]);
  const onSelectedBrand = (e) => {
    setBrandID(e.target.value);
  };
  //choose box of colors of products
  const handleChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };
  ///remove color from list
  const removeColor = (color) => {
    const newColors = colors.filter((e) => e !== color);
    setColors(newColors);
  };
   //to convert base 64 to file
   function dataURLtoFile(dataurl, filename) {

    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
}

  //insert data with images
  const handleSubmit = async (e) => {
   


  };
  useEffect(() => {
    if (loading === false) {
      setCatID(0);
      setColors([]);
      setImages([]);
      setProdName("");
      setProdDescription("");
      setPriceBefore("السعر قبل الخصم");
      setPriceAfter("السعر بعد الخصم");
      setQty("الكمية المتاحة");
      setBrandID(0);
      setCatID(0);
      setSelectedSubID(0);
      setTimeout(() => setLoading(true), 1500);

      if (product) {
        if (product.status === 201) {
          notify("تم الاضافة بنجاح", "success");
        } else {
          notify("هناك مشكله", "error");
        }
      }
    }
  }, [loading]);

  const onChaneName = (e) => {
    setProdName(e.target.value);
  };
  const onChangDescription = (e) => {
    setProdDescription(e.target.value);
  };
  const onChangePriceBe = (e) => {
    setPriceBefore(e.target.value);
  };
  const onChaneQuantity = (e) => {
    setQty(e.target.value);
  };
  const onChangePriceAf = (e) => {
    setPriceAfter(e.target.value)
  }
  return [
    CatID,
    BrandID,
    images,
    setImages,
    prodName,
    onChaneName,
    prodDescription,
    onChangDescription,
    priceBefore,
    onChangePriceBe,
    onChangePriceAf,
    qty,
    onChaneQuantity,
    priceAfter,
    onSelectCategory,
    category,
    options,
    onSelect,
    onRemove,
    onSelectedBrand,
    brand,
    colors,
    removeColor,
    setShowColor,
    showColor,
    handleChangeComplete,
    handleSubmit
  ];
};

export default AdminEditProductHook;
