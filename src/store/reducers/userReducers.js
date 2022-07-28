const DEFAULT_STATE = {
  userList: [
    {
      id: "1",
      userName: "man.nguyen",
      fullName: "Man Ng",
      email: "man.nguyen@gmail.com",
      passWord: "123",
      phoneNumber: "085512123123",
      type: "Client",
    },
    {
      id: "2",
      userName: "khai.tran",
      fullName: "Khai Tran",
      email: "khai.tran@gmail.com",
      passWord: "123",
      phoneNumber: "085512456456",
      type: "Admin",
    },
  ],
  selectedUser: null,
};
//nếu state là một mảng hoặc một object thì cần copy mảng mới
export const userReducers = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case "ADD_USER": {
      const data = [...state.userList];
      data.push({ ...payload, id: Date.now() });
      state.userList = data; // push xong phai lưu lại giá trị mới
      return { ...state };
    }
    case "UPDATE_USER": {
      const data = [...state.userList];
      const indx = data.findIndex((ele) => ele.id === payload.id);
      if (indx !== -1) {
        data[indx] = payload;
      }
      state.userList = data;
      state.selectedUser = null;
      return { ...state };
    }
    case "SELECT_EDIT_USER": {
      state.selectedUser = payload;
      return { ...state };
    }
    case "DELETED_USER": {
      const data = [...state.userList];
      const indx = data.findIndex((ele) => ele.id === payload.id);
      if (indx !== -1) {
        data.splice(indx, 1);
        
      }
      state.userList = data;
      return { ...state };
    }
    default:
      return state;
  }
};
