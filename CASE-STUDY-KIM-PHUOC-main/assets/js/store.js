

const addProduct = (e) => {
    let parent = e.target.parentElement.parentElement.parentElement.parentElement;
    let id = e.target.getAttribute("data-id");
    let image = parent.getElementsByClassName("card-img-top")[0].src;
    let title = parent.getElementsByClassName("card-title")[0].innerText;
    let system = parent.getElementsByClassName("card-system")[0].innerText;
    let core = parent.getElementsByClassName("card-core")[0].innerText;
    let vga = parent.getElementsByClassName("card-vga")[0].innerText;
    let ram = parent.getElementsByClassName("card-ram")[0].innerText;
    let storage = parent.getElementsByClassName("card-storage")[0].innerText;
    let price = parent.getElementsByClassName("card-price")[0].innerText;
    let total = price;
    let value = 1;
    let card = {
      id,
      image,
      title,
      system,
      core,
      vga,
      ram,
      storage,
      price,
      total,
      value,
    };
    if (carts.some((card) => card.id === id)) {
      swal({
        position: "top-end",
        icon: "warning",
        title: "Sản phẩm đã có trong giỏ hàng",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    carts.push(card);
    localStorage.setItem("carts", JSON.stringify(carts));
    swal("Đã thêm vào giỏ hàng!", "You clicked the button!", "success");
  };