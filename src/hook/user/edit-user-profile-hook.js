import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotification";
import { updateUserData } from "../../Redux/Actions/authAction";

const EditUserProfileHook = () => {
  // const [user, setUser] = useState("");
  // useEffect(() => {
  //   if (localStorage.getItem("user") != null)
  //     setUser(JSON.parse(localStorage.getItem("user")));
  // }, []);

  let user = [];
  if (localStorage.getItem("user") !== null){
    user = JSON.parse(localStorage.getItem("user"));
  }
  const [show, setShow] = useState(false);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [loading, setLoading] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handelEdit = async () => {
    let body;
    if (user.email === email) {
      body = {
        name,
        phone,
      };
    } else {
      body = {
        name,
        email,
        phone,
      };
    }
    setLoading(true);
    await dispatch(updateUserData(body));
    setLoading(false);
    setShow(false);
  };
  
  const res = useSelector((state) => state.auth.userProfile);
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        console.log(res);
        notify("تم تحديث البيانات بنجاح ", "success");
        localStorage.setItem("user", JSON.stringify(res.data.data.user));

        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      }else{
        notify("هناك خطأ فى تحديث البيانات", "error");
      }
    }
  }, [loading]);

  return [
    show,
    onChangeEmail,
    onChangeName,
    onChangePhone,
    handleClose,
    handleShow,
    handelEdit,
    name,
    email,
    phone,
    user,
  ];
};
export default EditUserProfileHook;
