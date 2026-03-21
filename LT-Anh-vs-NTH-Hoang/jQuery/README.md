```md
# Chương 2 — jQuery (Lab thực hành)

## Mục đích

Chương này giúp sinh viên làm quen với thư viện jQuery và cách sử dụng jQuery để xây dựng các chức năng tương tác trên giao diện web.

Sau khi hoàn thành chương này, sinh viên có thể:

- Sử dụng jQuery để thao tác DOM
- Xử lý sự kiện người dùng
- Tạo hiệu ứng hiển thị cơ bản
- Làm việc với HTML và CSS thông qua jQuery
- Di chuyển và tìm kiếm phần tử trong cây DOM (Traversing)
- Gửi và nhận dữ liệu từ API bằng jQuery AJAX
- Sử dụng các plugin mở rộng

---

## Nội dung chương

### Phần 1 — Kiến thức cơ bản

- Giới thiệu jQuery
- Khai báo và nhúng jQuery vào project
- Cú pháp jQuery
- Document Ready Event
- jQuery Selectors
- jQuery Events
- jQuery Effect

### Phần 2 — Làm việc với DOM nâng cao

- jQuery HTML/CSS Manipulation
- jQuery Traversing
- jQuery AJAX

### Phần 3 — Mở rộng

- jQuery Properties
- jQuery Plugins
- jQuery Mobile

---

## Lab thực hành

Các bài lab trong chương nhằm giúp sinh viên vận dụng kiến thức vào xây dựng các chức năng frontend cơ bản.

### Lab 1 — Selector và Event

- Thay đổi nội dung phần tử khi click
- Thay đổi style khi hover
- Ẩn / hiện phần tử bằng hiệu ứng

### Lab 2 — HTML và CSS Manipulation

- Thêm / xóa class
- Cập nhật nội dung text hoặc HTML
- Lấy giá trị từ input

### Lab 3 — Traversing

- Tìm phần tử cha
- Tìm phần tử con
- Highlight phần tử được chọn

### Lab 4 — AJAX CRUD

- Hiển thị danh sách dữ liệu từ API
- Thêm dữ liệu mới
- Cập nhật dữ liệu
- Xóa dữ liệu

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

## Cách chạy bài lab

### Trường hợp lab thông thường

Mở file `index.html` bằng Live Server hoặc trình duyệt.

### Trường hợp lab AJAX

Cần chạy JSON Server.

Cài đặt:

```

npm install -g json-server

```

Chạy server:

```

json-server --watch db.json

```

API mặc định:

```

[http://localhost:3000](http://localhost:3000)

```
