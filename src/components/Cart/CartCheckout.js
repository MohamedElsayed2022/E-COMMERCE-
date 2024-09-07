import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { applyCoupon } from "../../Redux/Actions/couponAction";
import notify from "../../hook/useNotification";
import ViewProductInCart from "../../hook/cart/view-product-in-cart";

const CartCheckout = ({
  couponNameRes,
  totalCartPrice,
  totalCartPriceAfterDiscount,
}) => {
  const [couponName, setCouponName] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const onChangeCoupon = (e) => {
    setCouponName(e.target.value);
  };
  const res = useSelector((state) => state.coupon.applyCoupons);

  const handleSubmit = async () => {
    setLoading(true);
    await dispatch(
      applyCoupon({
        couponName,
      })
    );
    setLoading(false);

  };
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تم تطبيق الخصم على المنتج بنجاح", "success");
        setTimeout(() => {
            window.location.reload(false)
        }, 1000);
      }else {
        notify("هذا الكوبون غير صحيح او منتهى الصلاحيه", "warn")
        setTimeout(() => {
            window.location.reload(false)
        }, 1000);
    }
    }
  }, [loading]);
  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Col xs="12" className="d-flex  flex-column  ">
        <div className="d-flex  ">
          <input
            value={couponName}
            onChange={onChangeCoupon}
            className="copon-input d-inline text-center "
            placeholder="كود الخصم"
          />
          <button className="copon-btn d-inline" onClick={handleSubmit}>
            تطبيق
          </button>
        </div>
        <div className="product-price d-inline w-100 my-3  border">
          {totalCartPriceAfterDiscount >= 1
            ? `${totalCartPrice} جنيه ... بعد الخصم ${totalCartPriceAfterDiscount} جنيه`
            : `${totalCartPrice} جنيه`}{" "}
        </div>
        <Link
          to="/order/paymethoud"
          style={{ textDecoration: "none" }}
          className="product-cart-add  d-inline "
        >
          <button className="product-cart-add w-100 px-2"> اتمام الشراء</button>
        </Link>
      </Col>
    </Row>
  );
};

export default CartCheckout;
