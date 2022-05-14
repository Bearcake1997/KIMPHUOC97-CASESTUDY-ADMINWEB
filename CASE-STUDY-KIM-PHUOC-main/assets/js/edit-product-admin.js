const getParameterByName = (name, url = window.location.href) => {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}; // Lấy đường dẫn trên thanh địa chỉ

const id = getParameterByName("id");

fetch("http://localhost:3000/product/" + id)
  .then((res) => res.json())
  .then((data) => {
    getProduct(data);
  })
  .then(() => {
    document.querySelector(".btn-edit").addEventListener("click", (e) => {
      const title = document.getElementById("product-title").value;
      const description = document.getElementById("product-description").value;
      const image = document.getElementById("product-image").value;
      const price = document.getElementById("product-price").value;
      const sort = document.getElementById("product-sort").value;

      const data = {
        title: title,
        description: description,
        image: image,
        price: price,
        sort: sort,
      };

      const option = {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
      };

      fetch("http://localhost:3000/product/"+id,
        option).then(() => {
          window.location.href = "http://127.0.0.1:5501/CASE-STUDY-KIM-PHUOC-main/admin/list-product.html";
        })
    });
  });

function getProduct(product) {
  editForm.insertAdjacentHTML(
    "afterbegin",
    `
        <div>
        <div class="form-row">
          <div class="col-md-12 mb-3">
            <label for="validationServer01">Tên sản phẩm</label>
            <input
              name="title"
              type="text"
              value="${product.title}"
              class="form-control"
              id="product-title"
              placeholder="Name Product"
              required
            />
          </div>
          <div class="col-md-12 mb-3">
            <label for="validationServer01">Mô tả</label>
            <input
              name="description"
              type="text"
              class="form-control"
              id="product-description"
              placeholder="description"
              value="${product.description}"
              required
            />
          </div>

          <div class="col-md-12 mb-3 ">
            <label for="validationServer01">url image</label>
            <div class="row justify-content-between m-0">
            <input
              name="image"
              type="text"
              name="image"
              class="form-control col-md-8"
              id="product-image"
              placeholder="url"
              value="${product.image}"
              required
            />
            <img src="${product.image}" alt="" width="160px" height="160px" class="border">
            </div>
          </div>
          <div class="col-md-12 mb-3">
            <label for="validationServer01">Giá</label>
            <input
              type="number"
              name="price"
              class="form-control"
              id="product-price"
              placeholder="Price"
              value="${product.price}"
              required
            />
          </div>
          <div class="col-md-12 mb-3">
            <label for="validationServer01">Phân loại</label>
            <input
              type="text"
              name="sort"
              class="form-control"
              id="product-sort"
              placeholder="Sort"
              value="${product.sort}"
              required
            />
          </div>
        </div>
        <button class="btn btn-dark btn-edit" type="submit">Sửa</button>
      </div>
        `
  );
}
