//---LOGIN---
document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("loginForm");
    if (form){
        form.addEventListener("submit", function (event) {
            // 🚫 Ngăn form submit mặc định, không có backend+Server
            event.preventDefault(); 

            let username = form.username;
            let password = form.password;

            // Kiểm tra username trống
            if (checknull(username)) {
                alert("⚠️Tên tài khoản không được để trống!");
                username.focus();
                return;
            }

            // Kiểm tra username dài quá
            if (maxText(username)) {
                alert("❌Sử dụng tài khoản hợp lệ (dưới 10 ký tự)!");
                username.focus();
                return;
            }

            // Kiểm tra password trống
            if (checknull(password)) {
                alert("⚠️Mật khẩu không được để trống!");
                password.focus();
                return;
            }

            // Regex chỉ cho phép chữ và số
            if (!/^[A-Za-z0-9]+$/.test(password.value)) {
                alert("❌Mật khẩu chỉ được chứa chữ và số!");
                password.focus();
                return;
            }

            // Lưu username và chuyển trang
            localStorage.setItem("loggedUser", username.value);
            alert("✅Đăng nhập thành công!");
            window.location.href = "home.html";
    });
  }
});

function checknull(txt) {
    return txt.value.trim().length === 0;
}

function maxText(txt) {
    return txt.value.trim().length >= 10;
}

// --- HIỆN / ẨN MẬT KHẨU ---
function togglePassword() {
    const passInput = document.getElementById("password");
    const icon = document.querySelector(".toggle-password");
    if (passInput.type === "password") {
        passInput.type = "text";
        icon.textContent = "🙉"; // đổi icon
    } else {
        passInput.type = "password";
        icon.textContent = "🙈";
    }
}
//_________________________________________________________________________
//---HOME---
function setName() {
    var name = localStorage.getItem("loggedUser"); // Lấy từ localStorage
    if (name) {
        document.getElementById("name").innerHTML = name;
    }
}

// --- CHUYỂN SECTION --- //
function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    document.querySelector(`nav button[data-section="${id}"`).classList.add('active');
}

function handleClick(btn, type) {
    btn.classList.toggle("active");

    if (btn.classList.contains("active")) {
        if (type === "traPhong") {
            btn.innerText = "Đã trả phòng ✅";
        }
        else if (type === "donDep"){
            btn.innerText = "Đã dọn dẹp ✅";
        } 
        else btn.innerText = "Đã xác nhận ✅";
        
    } 
    else {
        if (type === "traPhong"){
            btn.innerText = "Trả phòng";
        }
        else if (type === "donDep"){
            btn.innerText = "Dọn dẹp";
        } 
        else btn.innerText = "Xác nhận";
    }
}

// --- SAVE --- //
function saveData() {
    alert("✅ Dữ liệu trạng đã được lưu thành công");
}

// --- KHI TRANG LOAD --- //
window.onload = function () {
    setName();
    showSection('room-status');
};
