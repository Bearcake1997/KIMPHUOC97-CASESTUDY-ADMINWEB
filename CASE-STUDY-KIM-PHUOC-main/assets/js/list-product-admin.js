var listProduct = [];

fetch("http://localhost:3000/product")
  .then((res) => res.json())
  .then((data) => {
    listProduct = [...data];
    renderListProduct(listProduct);
  })
  .then(() => {
    var btnDelete = document.querySelectorAll(".btn-delete");
    btnDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            var id = e.target.getAttribute('data-id');
            fetch('http://localhost:3000/product/' + id, {
                method: 'DELETE',
            })
        })
    })
})

function renderListProduct(list) {
  var html = list.map((product) => {
    productListing.insertAdjacentHTML(
      "afterbegin",
      `
            <tr class="text-center">
                <th scope="row">${product.id}</th>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td>${product.price}đ</td>
                <td>
                    <img src="${product.image}" alt="" width="160px" height="160px">
                </td>
                <td>${product.sort}</td>
                <td class="action">
                    <group-button>
                        <a href=${`./edit-product.html?id=${product.id}`} class="btn btn-warning" type="button">
                            Edit
                        </a>
                        <button class="btn btn-danger btn-delete" data-id="${product.id}">
                            Delete
                        </button>
                    </group-button>
                </td>
            </tr>
        `
    );
  });
}
