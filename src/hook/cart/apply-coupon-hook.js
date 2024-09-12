import React, { useEffect, useState } from 'react'
import notify from '../useNotification';
import { applyCoupon } from '../../Redux/Actions/couponAction';
import { useDispatch, useSelector } from 'react-redux';

const ApplyCouponHook = () => {
    const [couponName, setCouponName] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const onChangeCoupon = (e) => {
      setCouponName(e);
    };
    
    const res = useSelector((state) => state.coupon.applyCoupons);
  
    const handleSubmitCoupon = async () => {
      if(couponName === ""){
        notify("من فضلك ادخل كود الخصم" , "warn")
        return
      }
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

    return [onChangeCoupon , couponName , handleSubmitCoupon]
}

export default ApplyCouponHook
