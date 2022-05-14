function checkAdminLogin() {
  var admin = localStorage.getItem("userEmailAdmin");
  if (admin == null) {
    window.location.href =
    "http://localhost:5501/CASE-STUDY-KIM-PHUOC-main/admin/login.html";
  } else {
    document.getElementById("emailAdmin").innerHTML = admin;
  }
}
checkAdminLogin();

function logoutAdmin() {
    localStorage.removeItem("userEmailAdmin");
    localStorage.removeItem("userNameAdmin");
    window.location.href = "http://localhost:5501/CASE-STUDY-KIM-PHUOC-main/admin/login.html";
    return;
}