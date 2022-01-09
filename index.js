// TÌM SỐ NGUYÊN DƯƠNG NHỎ NHẤT SAO CHO 1+2+...+n > 10000

function btnBaiMot() {
  var tongSoNguyenDuong = 0;
  var soNguyenDuongNhoNhat = 0;
  while (tongSoNguyenDuong < 10000) {
    tongSoNguyenDuong += soNguyenDuongNhoNhat;
    soNguyenDuongNhoNhat++;
  }
  alert("Số Nguyên Dương Nhỏ Nhất Là: " + soNguyenDuongNhoNhat);
}

// Nhập Vào 2 Số X, N Và Tính Tổng

function btnBaiHai() {
  var x = document.getElementById("nhapSoX").value * 1;
  var n = document.getElementById("nhapSoN").value * 1;
  var tong = 0;
  var i = 1;
  while (i <= n) {
    tong += Math.pow(x, i);
    i++;
  }
  alert("Tổng S(n) Là: " + tong);
}

// Tính Giai Thừa 1*2*...*n
function btnBaiBa() {
  var nGiaiThua = document.getElementById("nhapN").value * 1;
  var giaiThua = 1;
  var i = 1;
  if (nGiaiThua > 0) {
    while (i <= nGiaiThua) {
      giaiThua = giaiThua * i;
      i++;
    }
    alert(giaiThua);
  } else {
    alert("Vui Lòng Nhập Số Nguyên Dương Lớn Hơn 0");
  }
}

// In Ra 10 Thẻ Div

function btnBaiBon() {
  var divs = document.getElementsByTagName("div");
  for (var i = 1; i <= 10; i++) {
    // Vị trí chẵn => màu đỏ
    if (i % 2 == 0) {
      divs[i].style.background = "red";
    } else {
      // Vị trí lẽ => màu xanh
      divs[i].style.background = "blue";
    }
  }
  document.getElementById("theDiv").style.display = "block";
}

// Tìm Các Số Nguyên Tố Từ 1 Đến N

function btnBaiNam() {
  var soNguyenToEl = document.getElementById("soNguyenTo").value * 1;
  var chuoiSoNguyenTo = "";
  for (var i = 0; i <= soNguyenToEl; i++) {
    if (i < 2) {
      continue;
    }
    if (i == 2) {
      chuoiSoNguyenTo += i + " ";
    }

    if (
      i % 2 != 0 &&
      Math.floor(Math.sqrt(i)) < Math.sqrt(i) &&
      (Math.floor(i / 3) < i / 3 || i == 3) &&
      (Math.floor(i / 5) < i / 5 || i == 5)
    ) {
      chuoiSoNguyenTo += i + " ";
    }
  }
  alert("Các Số Nguyên Tố Là: " + chuoiSoNguyenTo);
}
