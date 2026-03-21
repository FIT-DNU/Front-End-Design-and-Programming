
# Chương 2 — jQuery (Lab thực hành)

## Mục đích
Chương này giúp sinh viên làm quen với jQuery và cách dùng jQuery để tạo tương tác cơ bản trên giao diện web.

Sau khi hoàn thành, sinh viên có thể:
- Thao tác DOM với jQuery
- Xử lý sự kiện người dùng
- Tạo hiệu ứng hiển thị cơ bản
- Làm việc với HTML/CSS qua jQuery
- Tìm kiếm/di chuyển phần tử trong cây DOM (Traversing)
- Gửi/nhận dữ liệu với AJAX
- Biết cách dùng plugin cơ bản

---

## Nội dung

### 1) Kiến thức cơ bản
- Giới thiệu jQuery
- Nhúng jQuery vào project
- Cú pháp jQuery
- Document Ready
- Selectors
- Events
- Effects

### 2) DOM nâng cao
- HTML/CSS Manipulation
- Traversing
- AJAX

### 3) Mở rộng (tùy chọn)
- Properties
- Plugins
- jQuery Mobile

---

## Lab thực hành

### Lab 1 — Selector & Event
- Đổi nội dung khi click
- Đổi style khi hover
- Ẩn/hiện phần tử (có hiệu ứng)

### Lab 2 — HTML & CSS Manipulation
- Thêm/xóa class
- Cập nhật text/HTML
- Lấy giá trị từ input

### Lab 3 — Traversing
- Tìm phần tử cha
- Tìm phần tử con
- Highlight phần tử được chọn

### Lab 4 — AJAX CRUD
- Hiển thị danh sách từ API
- Thêm mới
- Cập nhật
- Xóa

---

## Cấu trúc thư mục đề xuất

```
jquery/
  lab1-selector-event/
  lab2-html-css/
  lab3-traversing/
  lab4-ajax-crud/
```

Mỗi lab gồm:

```
index.html
style.css
script.js
```

---

## Cách chạy

### Lab thông thường
Mở `index.html` bằng Live Server hoặc trình duyệt.

### Lab AJAX (dùng JSON Server)

Cài đặt:
```bash
npm install -g json-server
```

Chạy server:
```bash
json-server --watch db.json
```

API mặc định:
- http://localhost:3000
