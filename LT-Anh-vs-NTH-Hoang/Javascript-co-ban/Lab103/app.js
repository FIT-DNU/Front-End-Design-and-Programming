const soAn = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const soDoanEl = document.getElementById("doan");
const btn = document.getElementById("btnDoan");
const ketQua = document.getElementById("ketQua");

btn.addEventListener("click", function () {
  const soDoan = Number(soDoanEl.value);
  attempts++;

  if (!soDoan || soDoan < 1 || soDoan > 100) {
    ketQua.innerText = "Nhập số từ 1-100!";
    return;
  }

  if (soDoan > soAn) {
    ketQua.innerText = "Quá lớn!";
  } else if (soDoan < soAn) {
    ketQua.innerText = "Quá nhỏ!";
  } else {
    ketQua.innerText = `Chính xác! Bạn đoán ${attempts} lần.`;
  }
});
