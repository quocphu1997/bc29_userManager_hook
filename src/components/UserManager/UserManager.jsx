import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function UserManager() {
  const dispatch = useDispatch();
  const selectoruser = useSelector((state) => state.userReducers); // lấy dữ liệu từ redux về qua hook useSelector
  const renderUserList = () => {
    return selectoruser.userList.map((ele, index) => {
      const { id, userName, fullName, email, phoneNumber, type } = ele;
      return (
        <tr className={`${index % 2 === 0 && "bg-light"}`} key={index}>
          <td>{index + 1}</td>
          <td>{userName}</td>
          <td>{fullName}</td>
          <td>{email}</td>
          <td>{phoneNumber}</td>
          <td>{type}</td>
          <td>
            <button
              onClick={() => {
                dispatch({
                  type: "SELECT_EDIT_USER",
                  payload: ele,
                });
              }}
              className="btn btn-info mr-2"
            >
              EDIT
            </button>
            <button className="btn btn-danger">DELETE</button>
          </td>
        </tr>
      );
    });
  };
  // console.log(selectoruser);
  return (
    <div className="card p-0 mt-3">
      <div className="card-header font-weight-bold">USER MANAGEMENT</div>
      <div className="row mt-4 px-3 ">
        <div className="col-4">
          <div className="form-group mb-0">
            <input
              type="text"
              placeholder="Search by full name..."
              className="form-control"
            />
          </div>
        </div>
        <div className="col-3 ml-auto">
          <div className="form-group mb-0">
            <select className="form-control">
              <option>All</option>
              <option>Client</option>
              <option>Admin</option>
            </select>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Username</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderUserList()}</tbody>
        </table>
      </div>
    </div>
  );
}
