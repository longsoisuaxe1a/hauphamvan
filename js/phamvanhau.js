$(document).ready(function() {
    $("#nhapSach").click(function() {
        $("#myModal").modal();
    })

    function kiemTraMaSach() {
        var input = $("#txtMaSach").val();
        var regex = /^\d{3}\-[a-zA-Z]{5}$/;
        if (input == "") {
            $("#erMaSach").html("Bắt buộc nhập");
            return false;
        } else if (!regex.test(input)) {
            $("#erMaSach").html("Nhập sai định dạng");
        } else {
            $("#erMaSach").html("Hợp lệ");
            return true;
        }
    }
    $("#txtMaSach").blur(kiemTraMaSach);
    // ngay
    function kiemTraSoLuong() {
        var regex = /^[1-9]\d*$/;
        if ($("#txtSoLuong").val() == "") {
            $("#erSoLuong").html("Bắt buộc nhập");
            return false;
        } else if (!regex.test($("#txtSoLuong").val())) {
            $("#erSoLuong").html("Phải nhập số nguyên dương lớn hơn 0");
            return false;
        } else if ($("#txtSoLuong").val() < 0 || $("#txtSoLuong").val() > 1000) {
            $("#erSoLuong").html("Nhập lớn hơn 0 và bé hơn 1000");
            return false;
        } else {
            $("#erSoLuong").html("Hợp lê");
            return true;
        }
    }
    $("#txtSoLuong").blur(kiemTraSoLuong);
    $("#txtNhaXB").change(function() {
        if ($("#txtNhaXB").val() == "Nha xuat ban Tre") {
            $("#txtChietKhau").val("25%");
        } else if ($("#txtNhaXB").val() == "Nha xuat ban Kim Dong") {
            $("#txtChietKhau").val("20%");
        } else if ($("#txtNhaXB").val() == "Nha xuat ban The Gioi Moi") {
            $("#txtChietKhau").val("30%");
        } else {
            $("#txtChietKhau").val("35%");
        }
    })

    function kiemTraNgayNhap() {
        var input = $("#txtNgayNhap").val();
        if (input == "") {
            $("#erNgayNhap").html("Bắt buộc nhập");
            return false;
        }
        var date = new Date();
        date.getDate();
        var day = new Date($("#txtNgayNhap").val());
        if (day < date) {
            $("#erNgayNhap").html("Ngày nhập phải lớn hơn ngày hiện tại");
            return false;
        } else {
            $("#erNgayNhap").html("Hợp lệ");
            return true;
        }
    }
    $("#txtNgayNhap").blur(kiemTraNgayNhap);
    var i = 0;
    $("#nhapKho").click(function() {
        if (!kiemTraMaSach() || !kiemTraNgayNhap() || !kiemTraSoLuong()) {
            $("#thongBao").html("Vui lòng nhập đúng và đầy đủ thông tin");
            return false;
        }
        var maSach = $("#txtMaSach").val();
        var ngayNhap = $("#txtNgayNhap").val();
        var soLuong = $("#txtSoLuong").val();
        var nhaXB = $("#txtNhaXB").val();
        var chietKhau = $("#txtChietKhau").val();
        var theLoai = "Văn học";
        if ($("#kh").is(":checked")) {
            theLoai = "Khoa học";
        } else if ($("#tn").is(":checked")) {
            theLoai = "Thiếu nhi";
        }
        var row = "<tr><td>" + (++i) + "</td><td>" + maSach + "</td><td>" + ngayNhap + "</td><td>" + soLuong + "</td><td>" + nhaXB + "</td><td>" + chietKhau + "</td><td>" + theLoai + "</td></tr>"
        $("table tbody").append(row);
        $("#myModal").modal("hide");
        return true;
    })
})