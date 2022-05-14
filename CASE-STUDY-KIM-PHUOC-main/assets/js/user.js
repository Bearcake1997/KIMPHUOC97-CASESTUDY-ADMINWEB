var listUser = [];

fetch("http://localhost:3000/user")
    .then((res) => res.json())
    .then((data) => {
        listUser = [...data];
        renderListUser(listUser);
    })
    .then(() => {
        var btnDelete = document.querySelectorAll(".btn-delete");
        btnDelete.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                var id = e.target.getAttribute('data-id');
                fetch('http://localhost:3000/user/' + id, {
                    method: 'DELETE',
                })
            })
        })
    })

function renderListUser(list) {
    var html = list.map((user) => {
        userListing.insertAdjacentHTML(
            "afterbegin",
            `
            <tr class="text-center">
                <th scope="row">${user.id}</th>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td class="action">
                    <group-button>
                        <a href=${`./edit-user.html?id=${user.id}`} class="btn btn-warning" type="button">
                            Edit
                        </a>
                        <button class="btn btn-danger btn-delete" data-id="${user.id}">
                            Delete
                        </button>
                    </group-button>
                </td>
            </tr>
        `
        );
    });
}