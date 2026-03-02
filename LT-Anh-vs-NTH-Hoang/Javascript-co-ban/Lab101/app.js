// Lấy phần tử input cân nặng (kg)
const canNangEl = document.getElementById("canNang");
// Lấy phần tử input chiều cao (m)
const chieuCaoEl = document.getElementById("chieuCao");
// Nút để tính BMI
const btn = document.getElementById("btnTinh");
// Phần tử hiển thị kết quả
const result = document.getElementById("result");

btn.addEventListener("click", function () {
  // Lấy giá trị nhập và chuyển sang số
  const canNang = Number(canNangEl.value);
  const chieuCao = Number(chieuCaoEl.value);

  // Kiểm tra giá trị không hợp lệ
  if (!canNang || !chieuCao || canNang <= 0 || chieuCao <= 0) {
    result.innerText = "Vui lòng nhập số hợp lệ!";
    return;
  }

  // Tính BMI = cân nặng / (chiều cao * chiều cao)
  const bmi = canNang / (chieuCao * chieuCao);
  let phanLoai = "";

  // Phân loại theo tiêu chuẩn BMI
  // BMI < 18.5: Thiếu cân
  // 18.5 ≤ BMI < 25: Bình thường
  // 25 ≤ BMI < 30: Thừa cân
  // BMI ≥ 30: Béo phì
  if (bmi < 18.5) {
    phanLoai = "Thiếu cân";
  } else if (bmi < 25) {
    phanLoai = "Bình thường";
  } else if (bmi < 30) {
    phanLoai = "Thừa cân";
  } else {
    phanLoai = "Béo phì";
  }

  // Hiển thị kết quả với 2 chữ số thập phân
  result.innerText = `BMI: ${bmi.toFixed(2)} - ${phanLoai}`;
});
