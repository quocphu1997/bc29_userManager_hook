import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { UserContext } from "../UserManagement";

export default function Register() {
  const state = {
    value: {
      id: "",
      userName: "",
      fullName: "",
      email: "",
      passWord: "",
      phoneNumber: "",
      type: "",
    },
    error: {
      id: "",
      userName: "",
      fullName: "",
      email: "",
      passWord: "",
      phoneNumber: "",
      type: "",
    },
  };
  const selectorList = useSelector((state) => state.userReducers);
  const dispatch = useDispatch();
  const [regisList, setRegisList] = useState(state.value);
  const [errorList, setErrorList] = useState(state.error);
  const formRef = useRef();

  // console.log(formRef);

  useEffect(() => {
    setRegisList({
      ...selectorList.selectedUser,
    });
  }, [selectorList]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisList({
      ...regisList,
      [name]: value,
    });
    // console.log(event.target.checkValidity());
    // console.log(!formRef.current?.checkValidity());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(regisList);
    // có lỗi sẽ không dispatch
    // for in duyệt object
    // for (const key in errorList) {
    //   const messErr = errorList[key];
    //   if (messErr) {
    //     return;
    //   }
    // }

    if (event.target.checkValidity() === false) {
      return;
    }

    if (selectorList.selectedUser) {
      dispatch({
        type: "UPDATE_USER",
        payload: regisList,
      });
    } else {
      dispatch({
        type: "ADD_USER",
        payload: regisList,
      });
    }
  };

  const handleBlur = (event) => {
    const {
      name,
      title,
      minLength,
      maxLength,
      validationMessage,
      validity: { valueMissing, patternMismatch, tooLong, tooShort },
    } = event.target;
    // console.log("error", errorList);
    let messError = "";
    if (patternMismatch) {
      messError = `${title} is invalid pattern`;
    }
    if (tooShort || tooShort) {
      messError = `${title} must from ${minLength} to ${maxLength} character`;
    }

    if (valueMissing) {
      messError = `${title} is required`;
    }
    setErrorList({
      ...errorList,
      [name]: messError,
    });

    // for (const key in errorList) {

    // }
  };
  // const listEdit = useContext(UserContext);

  const { userName, fullName, email, passWord, phoneNumber, type } =
    regisList || {};
  return (
    <div className="card p-0">
      <div className="card-header bg-warning text-white font-weight-bold">
        REGISTER FORM
      </div>
      <div className="card-body">
        <form ref={formRef} noValidate onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label>Username</label>
                <input
                  required
                  name="userName"
                  title="User name"
                  minLength={4}
                  maxLength={15}
                  value={userName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  className="form-control"
                />
                {errorList.userName && (
                  <span className="text-danger">{errorList.userName}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  required
                  pattern={
                    "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
                    "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
                    "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
                  }
                  name="fullName"
                  title=" Full name"
                  value={fullName}
                  minLength={4}
                  maxLength={30}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  className="form-control"
                />
                {errorList.fullName && (
                  <span className="text-danger">{errorList.fullName}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Password</label>
                <input
                  required
                  name="passWord"
                  title="Pass word"
                  value={passWord}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  className="form-control"
                />
                {errorList.passWord && (
                  <span className="text-danger">{errorList.passWord}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  required
                  pattern="^[0-9]+$"
                  title="Phone number"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  className="form-control"
                />
                {errorList.phoneNumber && (
                  <span className="text-danger">{errorList.phoneNumber}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Email</label>
                <input
                  required
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$"
                  title="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  className="form-control"
                />
                {errorList.email && (
                  <span className="text-danger">{errorList.email}</span>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Type</label>
                <select
                  required
                  title="Type"
                  name="type"
                  value={type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control"
                >
                  <option></option>
                  <option>Client</option>
                  <option>Admin</option>
                </select>
                {errorList.type && (
                  <span className="text-danger">{errorList.type}</span>
                )}
              </div>
            </div>
          </div>
          <button
            disabled={!formRef.current?.checkValidity()}
            className="btn btn-warning mr-2"
          >
            SAVE
          </button>
          <button type="reset" className="btn btn-outline-dark">
            RESET
          </button>
        </form>
      </div>
    </div>
  );
}
