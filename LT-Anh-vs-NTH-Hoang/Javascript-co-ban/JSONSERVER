# HƯỚNG DẪN CÀI ĐẶT VÀ SỬ DỤNG JSON SERVER CHO MÔN LẬP TRÌNH FRONT-END

Tài liệu này hướng dẫn sinh viên cách sử dụng **JSON Server** để tạo một **REST API giả (Mock API)** phục vụ việc luyện tập gọi API bằng **JavaScript thuần (Fetch API).**

Mục tiêu sau khi hoàn thành:

* Chạy được một API server local
* Tạo dữ liệu giả bằng file JSON
* Thực hiện được các request GET / POST / PUT / DELETE
* Hiển thị dữ liệu lên giao diện HTML

---

## 1. Yêu cầu trước khi bắt đầu (Prerequisites)

Sinh viên cần đảm bảo:

* Đã cài **NodeJS (phiên bản LTS)**
* Biết mở Terminal / Command Prompt
* Biết JavaScript cơ bản
* Hiểu HTML DOM

---

## 2. Cài đặt JSON Server

Mở Terminal và chạy:

```bash
npm install -g json-server
```

Kiểm tra:

```bash
json-server -v
```

Nếu hiển thị version → cài đặt thành công.

---

## 3. Tạo dữ liệu giả (Mock Database)

Tạo file:

```text
db.json
```

Ví dụ:

```json
{
  "students": [
    { "id": 1, "name": "An", "age": 20 },
    { "id": 2, "name": "Bình", "age": 21 }
  ]
}
```

JSON Server sẽ tự động tạo API từ dữ liệu này.

---

## 4. Chạy JSON Server

Chạy lệnh:

```bash
json-server --watch db.json
```

Server mặc định chạy tại:

```text
http://localhost:3000
```

Sinh viên có thể mở trình duyệt để xem:

```text
http://localhost:3000/students
```

---

## 5. Các API có thể sử dụng

| Method | URL         |
| ------ | ----------- |
| GET    | /students   |
| GET    | /students/1 |
| POST   | /students   |
| PUT    | /students/1 |
| DELETE | /students/1 |

---

## 6. Gọi API bằng JavaScript (Fetch)

### Lấy dữ liệu

```javascript
fetch("http://localhost:3000/students")
  .then(response => response.json())
  .then(data => console.log(data))
```

---

### Thêm dữ liệu

```javascript
fetch("http://localhost:3000/students", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Chi",
    age: 19
  })
})
```

---

### Xóa dữ liệu

```javascript
fetch("http://localhost:3000/students/1", {
  method: "DELETE"
})
```

---

## 7. Quy trình luyện tập

Sinh viên nên thực hành theo thứ tự:

1. Tạo file HTML đơn giản
2. Chạy JSON Server
3. Gọi API bằng Fetch
4. Hiển thị dữ liệu ra bảng HTML
5. Tạo form thêm dữ liệu
6. Thử xóa hoặc sửa dữ liệu

---

## Các lỗi thường gặp và Cách khắc phục

### 1. Port đã được sử dụng

Thông báo:

```
EADDRINUSE
```

Cách sửa:

```bash
json-server --watch db.json --port 4000
```

---

### 2. Không nhận lệnh json-server

Nguyên nhân: chưa cài global.

Cách sửa:

```bash
npm install -g json-server
```

---

> **Mẹo nhỏ:** Luôn chạy JSON Server ở cửa sổ Terminal riêng để có thể chỉnh sửa HTML và JavaScript song song.
