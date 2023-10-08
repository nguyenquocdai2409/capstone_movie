export let userLocalStorage = {
  get: () => {
    let dataJson = localStorage.getItem("USER");
    // =>> nhớ phải return, nếu ko return thì hàm kia chạy sẽ trả về undefine
    return JSON.parse(dataJson);
    // =>>> qua userReducer, thay giá trị null = userLocalStorage.get() cho info để nó lấy và lưu giá trị trên redux
  },
  set: (user) => {
    //set dữ liệu để get dữ liệu
    let dataJson = JSON.stringify(user);
    localStorage.setItem("USER", dataJson);
  },
  remove: () => {
    //chức năng đăng xuất
    localStorage.removeItem("USER");
  },
};
