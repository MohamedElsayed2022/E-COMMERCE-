import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import avater from "../../images/avatar.png";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import add from "../../images/add.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/categoryAction";
const AdminAddProduct = () => {
  const [images, setImages] = useState([]);
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكمية المتاحة");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
  const [CatID, setCatID] = useState("");
  const [BrandID, setBrandID] = useState("");
  const [subCatID, setSubCatID] = useState([]);
  const [selectedSubID, setSelectedSubID] = useState([]);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.allcategory.category);
  if (category) console.log(category.data);

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  console.log(images);
  const onSelect = () => {};
  const onRemove = () => {};
  const onNameChange = (e) => {
    setProdName(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setProdDescription(e.target.value);
  };
  const onPriceChange = (e) => {
    setPriceAfter(e.target.value);
  };
  const onQuantityChange = (e) => {
    setQty(e.target.value);
  };
  const onPriceBeforeChange = (e) => {
    setPriceBefore(e.target.value);
  };
  const onSelectCategory = (e) => {
    setCatID(e.target.value);
    console.log(e.target.value)
  };
  const onSelectedBrand =(e)=>{
    setBrandID(e.target.value)
  }
  const options = [
    { name: "التصنيف الاول", id: 1 },
    { name: "التصنيف الثاني", id: 2 },
  ];

  // const onImageChange = () => {};
  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">اضف منتج جديد</div>
        <Col sm="8">
          <div className="mb-2">صور المنتج</div>{" "}
          <MultiImageInput
            images={images}
            setImages={setImages}
            backgroundColor="white"
            theme={"light"}
            max={4}
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
            value={prodName}
            onChange={(e) => setProdName(e.target.value)}
          />
        </Col>
        <Col sm="8">
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
            value={prodDescription}
            onChange={(e) => setProdDescription(e.target.value)}
          />{" "}
        </Col>
        <Col sm="8">
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            value={priceBefore}
            onChange={(e) => setPriceBefore(e.target.value)}
          />
        </Col>
        <Col sm="8">
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder=" الكمية المتاحة"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </Col>
        <Col sm="8">
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر بعد الخصم"
            value={priceAfter}
            onChange={(e) => setPriceAfter(e.target.value)}
          />
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-3 px-2 "
            onChange={onSelectCategory}
          >
            <option value="0">التصنيف الرئيسي</option>
            {category.data
              ? category.data.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name} 
                  </option>
                ))
              : null}
          </select>
          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-3 px-2 "
            onChange={onSelectedBrand}
          >
            <option value="val"> اختار ماركة</option>
            <option value="val2">التصنيف الماركة الاولي</option>
            <option value="val2">التصنيف الماركة الثانيه</option>
            <option value="val2">التصنيف الرابع</option>
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="d-flex mt-1">
            <div
              className="color border ms-2 mt-1"
              style={{ backgroundColor: "red" }}
            ></div>
            <div
              className="color border ms-2 mt-1"
              style={{ backgroundColor: "gray" }}
            ></div>
            <div
              className="color border ms-2 mt-1"
              style={{ backgroundColor: "purple" }}
            ></div>
            <img src={add} alt="" width="30px" height="35px" className="" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button className="btn-save d-inline mt-2">حفظ التغييرات</button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddProduct;
