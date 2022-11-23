function myFunction() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" && password == "") {
        document.getElementById("error1").innerHTML = "Tên đăng nhập không được để trống!"
        document.getElementById("error2").innerHTML = "Mật khẩu không được để trống!"
    } 
    else if(username != "admin" || password != "123456"){
        document.getElementById("error3").innerHTML = "Tên đăng nhâp hoặc mật khẩu không đúng"
    }else{
       document.getElementById("thanhcong").innerHTML = "Đăng nhập thành công"
    }
}