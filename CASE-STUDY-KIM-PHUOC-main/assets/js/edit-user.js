const getParameterByName = (name, url = window.location.href) => {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }; // Lấy đường dẫn trên thanh địa chỉ
  
  const id = getParameterByName("id");
  
  fetch("http://localhost:3000/user/" + id)
    .then((res) => res.json())
    .then((data) => {
      getUser(data);
    })
    .then(() => {
      document.querySelector(".btn-edit").addEventListener("click", (e) => {
        const name = document.getElementById("user-name").value;
        const email = document.getElementById("user-email").value;
        const role = document.getElementById("user-role").value;
  
        const data = {
          name: name,
          email: email,
          role: role,
        };
  
        const option = {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(data),
        };
  
        fetch("http://localhost:3000/user/"+id,
          option).then(() => {
            window.location.href = "http://127.0.0.1:5500/CASE-STUDY-KIM-PHUOC-main/admin/user.html";
          })
      });
    });
  
  function getUser(user) {
    editFormUser.insertAdjacentHTML(
      "afterbegin",
      `
          <div>
          <div class="form-row">
            <div class="col-md-12 mb-3">
              <label for="validationServer01">NAME</label>
              <input
                name="name"
                type="text"
                value="${user.name}"
                class="form-control"
                id="user-name"
                placeholder="Tên khách hàng"
                required
              />
            </div>
            <div class="col-md-12 mb-3">
              <label for="validationServer01">EMAIL</label>
              <input
                name="email"
                type="text"
                class="form-control"
                id="user-email"
                placeholder="Email"
                value="${user.email}"
                required
              />
            </div>
            <div class="col-md-12 mb-3">
              <label for="validationServer01">ROLE</label>
              <input
                type="text"
                name="role"
                class="form-control"
                id="user-role"
                placeholder="Vai Trò"
                value="${user.role}"
                required
              />
            </div>
          </div>
          <button class="btn btn-dark btn-edit" type="submit">Sửa</button>
        </div>
          `
    );
  }
  