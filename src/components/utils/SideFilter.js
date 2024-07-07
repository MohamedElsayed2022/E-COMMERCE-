import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/categoryAction";
import SidebarSearchHook from "../../hook/search/sidebar-search-hook";

const SideFilter = () => {
    const [category , brand] = SidebarSearchHook()
  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className="filter-title">الفئة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="" />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {category && category.length > 0
            ? category.map((cat) => (
                <div className="d-flex mt-2" key={cat._id}>
                  <input type="checkbox" value="" />
                  <div className="filter-sub me-2">{cat.name}</div>
                </div>
              ))
            : <h6>لايوجد فئات</h6>}

          <div className="d-flex mt-3">
            <input type="checkbox" value="" />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
        </div>

        <div className="d-flex flex-column mt-2">
          <div className="filter-title mt-3">الماركة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="" />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {brand && brand.length > 0
            ? brand.map((brand) => (
                <div className="d-flex mt-2" key={brand._id}>
                  <input type="checkbox" value="" />
                  <div className="filter-sub me-2">{brand.name}</div>
                </div>
              ))
            : <h6>لايوجد ماركات</h6>}
        </div>

        <div className="filter-title my-3">السعر</div>
        <div className="d-flex">
          <p className="filter-sub my-2">من:</p>
          <input
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">الي:</p>
          <input
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;
