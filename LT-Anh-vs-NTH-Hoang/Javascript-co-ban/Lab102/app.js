const tongTienEl = document.getElementById("tongTien");
const memberEl = document.getElementById("loaiKhach");
const btn = document.getElementById("btnTinh");
const result = document.getElementById("ketQua");

btn.addEventListener("click", function () {
  const tongTien = Number(tongTienEl.value);

  if (!tongTien || tongTien <= 0) {
    result.innerText = "Số tiền không hợp lệ!";
    return;
  }

  let rate = 0;

  switch (memberEl.value) {
    case "KHONG":
      rate = 0;
      break;
    case "BAC":
      rate = 0.05;
      break;
    case "VANG":
      rate = 0.1;
      break;
    case "BACHKIM":
      rate = 0.15;
      break;
  }

  const giamGia = tongTien * rate;
  const total = tongTien - giamGia;

  result.innerText = `Giảm: ${giamGia.toLocaleString()} đ
     Tổng thanh toán: ${total.toLocaleString()} đ`;
});
