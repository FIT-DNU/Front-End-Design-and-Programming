Javascript cơ bản — Lab thực hành
Mục tiêu: Tài liệu này mô tả ba bài lab trong thư mục và hướng dẫn cách chạy nhanh để kiểm tra kết quả.
**Cấu trúc thư mục**

# Javascript cơ bản — Lab thực hành

---

## Mục đích chung

- Làm quen với cú pháp JavaScript cơ bản và cách tương tác với DOM
- Thực hành xử lý sự kiện, form và cập nhật giao diện động
- Hiểu cách tổ chức file frontend đơn giản (HTML/CSS/JS)

---

Tài liệu này mô tả chi tiết ba bài lab trong thư mục `Javascript-co-ban` và hướng dẫn cách chạy, kiểm thử nhanh.

---

## 1. Cấu trúc thư mục

```plaintext
Javascript-co-ban/
├─ Lab101/
│  ├─ index.html        ← Entry demo cơ bản (DOM, event)
│  └─ app.js            ← Logic JavaScript cho Lab101
│
├─ Lab102/
│  ├─ index.html        ← Form và thao tác DOM nâng cao
│  └─ app.js            ← Logic JavaScript cho Lab102
│
├─ Lab103/
│  ├─ index.html        ← Bài tập tương tác (timer, mảng)
│  └─ app.js            ← Logic JavaScript cho Lab103
```

---

## 2. Hướng dẫn chạy nhanh

### Chạy bằng Live Server (khuyến nghị cho VS Code)

- Cài extension `Live Server` trong VS Code (Riêng: Ritwick Dey).
- Mở VS Code trong workspace chứa `LT-Anh-vs-NTH-Hoang`.
- Mở file `index.html` trong thư mục lab muốn chạy (ví dụ `Lab101/index.html`).
- Nhấp chuột phải vào file editor → chọn `Open with Live Server`, hoặc nhấn nút `Go Live` ở thanh trạng thái (status bar) để bật server.
- Live Server sẽ mở một tab trình duyệt với địa chỉ dạng `http://127.0.0.1:5500/...`; mọi thay đổi lưu file sẽ reload tự động.

Ví dụ nhanh: mở `Lab101/index.html` rồi chọn `Open with Live Server` để xem kết quả ngay.

### (Tùy chọn) Dùng server tĩnh nếu không dùng VS Code

- Nếu không dùng VS Code, bạn vẫn có thể chạy server tĩnh như trước:

```bash
# Từ thư mục workspace gốc
python -m http.server 5500
# hoặc (nếu có Node.js):
npx http-server -p 5500

# Sau đó mở trình duyệt tại URL phù hợp, ví dụ:
# http://localhost:5500/LT-Anh-vs-NTH-Hoang/Javascript-co-ban/Lab101/
```

---

## 3. Chi tiết từng lab

### 3.1 Lab101 — Làm quen với DOM & sự kiện

**Mục tiêu:** Hiển thị nội dung động, thao tác DOM, xử lý click/event cơ bản.

**Tệp:** `Lab101/index.html`, `Lab101/app.js`

**Nội dung chính:**

- Truy xuất phần tử bằng `document.getElementById`/`querySelector`
- Thêm sự kiện `click`/`input`
- Cập nhật nội dung và lớp CSS động

**Chạy thử:** mở `Lab101/index.html` hoặc truy cập URL server như phần trên.

---

### 3.2 Lab102 — Form và thao tác dữ liệu

**Mục tiêu:** Thực hành xử lý form, validate đơn giản, render danh sách từ dữ liệu đầu vào.

**Tệp:** `Lab102/index.html`, `Lab102/app.js`

**Nội dung chính:**

- Bắt sự kiện `submit` của form và ngăn reload mặc định
- Lấy giá trị từ input, validate cơ bản (không rỗng)
- Thêm/loại bỏ phần tử DOM dựa trên dữ liệu

**Gợi ý:** Kiểm tra trong `app.js` các hàm xử lý validation và cập nhật danh sách.

---

### 3.3 Lab103 — Tương tác nâng cao (timer, mảng)

**Mục tiêu:** Sử dụng timer (`setInterval`/`setTimeout`), thao tác mảng (map/filter) và hiển thị kết quả tương tác.

**Tệp:** `Lab103/index.html`, `Lab103/app.js`

**Nội dung chính:**

- Tạo bộ đếm, start/stop bằng nút
- Lọc/sắp xếp dữ liệu và render lại giao diện
- Quản lý trạng thái nhỏ trong biến JS

---

## 4. Tệp chính và điểm cần chú ý

- `index.html` của mỗi lab là điểm vào — chứa markup và tham chiếu tới `app.js` tương ứng.
- `app.js` chứa toàn bộ logic của lab; chỉnh sửa file này để thử nghiệm tính năng mới.
- Nếu cần sử dụng module hoặc build tool, thêm hướng dẫn vào README (hiện tại các lab dùng script thuần).

---
