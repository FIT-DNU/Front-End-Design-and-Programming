# Cài đặt và sử dụng jQuery trong Project Frontend

---

## Mục đích

Tài liệu này hướng dẫn cách cài đặt và cấu hình thư viện jQuery trong project frontend nhằm phục vụ việc thao tác DOM, xử lý sự kiện và gọi API.

jQuery là thư viện JavaScript giúp đơn giản hóa các thao tác thường gặp trong phát triển giao diện web.

---

## 1. Cấu trúc project frontend mẫu

```

project/
├─ index.html
├─ css/
│  └─ style.css
├─ js/
│  ├─ jquery.js
│  └─ app.js

````

Trong đó:

- `jquery.js` là thư viện jQuery
- `app.js` là file code xử lý chức năng của ứng dụng

---

## 2. Cài đặt jQuery bằng CDN

Đây là cách đơn giản và được khuyến nghị sử dụng trong các bài lab.

### Bước 1 — Thêm script vào HTML

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
````

### Bước 2 — Thêm file xử lý logic

```html
<script src="js/app.js"></script>
```

Lưu ý:

Script jQuery phải được khai báo trước file JavaScript của project.

---

## 3. Cài đặt jQuery bằng cách Download

Cách này phù hợp khi project cần chạy offline hoặc không phụ thuộc CDN.

### Bước 1 — Truy cập trang tải

[https://jquery.com/download/](https://jquery.com/download/)

### Bước 2 — Tải file jQuery bản minified

Ví dụ:

```
jquery-3.7.1.min.js
```

### Bước 3 — Đặt vào thư mục project

```
js/jquery.js
```

### Bước 4 — Nhúng vào HTML

```html
<script src="js/jquery.js"></script>
<script src="js/app.js"></script>
```

---

## 4. Kiểm tra jQuery hoạt động

Tạo file `app.js`:

```js
$(document).ready(function(){
    console.log("jQuery loaded");
});
```

Nếu console hiển thị log → cài đặt thành công.

---

## 5. Luồng hoạt động khi sử dụng jQuery

1. Browser tải file HTML
2. Browser tải thư viện jQuery
3. Browser tải file JavaScript của project
4. DOM load hoàn tất
5. Code trong `$(document).ready()` được thực thi

Điều này đảm bảo các phần tử HTML đã tồn tại khi jQuery thao tác.

---

## 6. Lỗi thường gặp khi cài đặt jQuery

### Lỗi 1 — `$ is not defined`

Nguyên nhân:

* jQuery chưa được load
* Sai đường dẫn file
* Khai báo script sai thứ tự

Cách khắc phục:

* Kiểm tra Network tab
* Đảm bảo script jQuery nằm trước script app

---

### Lỗi 2 — Code chạy trước khi DOM load

Nguyên nhân:

Không sử dụng document ready.

Cách khắc phục:

```js
$(function(){

});
```

---

### Lỗi 3 — Sai đường dẫn file

Ví dụ sai:

```html
<script src="jquery.js"></script>
```

Trong khi file nằm ở:

```
js/jquery.js
```

Cần sửa:

```html
<script src="js/jquery.js"></script>
```

---

## 7. Best Practices khi dùng jQuery

* Luôn đặt script cuối body hoặc dùng document ready
* Không trộn lẫn quá nhiều JavaScript thuần và jQuery nếu không cần thiết
* Tách logic thành file riêng (`app.js`)
* Sử dụng CDN trong môi trường học tập và demo
* Dùng bản minified khi deploy

---

## Kết luận

Việc cài đặt jQuery đúng cách giúp đảm bảo:

* Script chạy ổn định
* DOM được thao tác chính xác
* Tránh lỗi runtime khi phát triển frontend

jQuery là bước trung gian quan trọng giúp sinh viên hiểu rõ cơ chế tương tác giữa JavaScript và giao diện web trước khi chuyển sang các framework hiện đại.
