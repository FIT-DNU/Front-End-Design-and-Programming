# HƯỚNG DẪN CÀI ĐẶT VÀ SỬ DỤNG POSTMAN CHO MÔN LẬP TRÌNH FRONT-END

Tài liệu này hướng dẫn sinh viên cách cài đặt và sử dụng **Postman** để kiểm thử **REST API** phục vụ việc luyện tập gọi API bằng **JavaScript thuần (Fetch API)** và làm việc với **JSON Server / Mock Backend.**

Mục tiêu sau khi hoàn thành:

- Cài đặt và mở được Postman
- Gửi được request GET / POST / PUT / PATCH / DELETE
- Hiểu cấu trúc một HTTP Request
- Kiểm tra response JSON từ server
- Test API trước khi tích hợp vào giao diện HTML

---

## 1. Yêu cầu trước khi bắt đầu (Prerequisites)

Sinh viên cần đảm bảo:

- Đã cài **Postman**
- Đã chạy **JSON Server** hoặc có API bất kỳ để test
- Biết mở Terminal / Command Prompt
- Biết JavaScript cơ bản
- Hiểu HTML DOM

---

## 2. Cài đặt Postman

### Bước 1: Truy cập website

```

[https://www.postman.com/downloads/](https://www.postman.com/downloads/)

```

### Bước 2: Chọn phiên bản phù hợp

- Windows
- MacOS
- Linux

### Bước 3: Cài đặt

Cài đặt giống như phần mềm thông thường → Next → Finish.

### Bước 4: Mở Postman

Sau khi mở thành công sẽ thấy giao diện tạo **New Request.**

---

## 3. Tạo Request đầu tiên

### Bước 1: Nhấn **New → HTTP Request**

### Bước 2: Chọn Method

Ví dụ:

```

GET

```

### Bước 3: Nhập URL

Ví dụ nếu đang chạy JSON Server:

```

[http://localhost:3000/students](http://localhost:3000/students)

```

### Bước 4: Nhấn **Send**

Postman sẽ hiển thị dữ liệu trả về ở phía dưới.

---

## 4. Làm việc với các Method REST API

Giả sử API:

```

[http://localhost:3000/students](http://localhost:3000/students)

```

---

### 4.1 GET – Lấy dữ liệu

```

GET [http://localhost:3000/students](http://localhost:3000/students)

```

Kết quả:

- Trả về danh sách sinh viên dạng JSON

---

### 4.2 GET theo ID

```

GET [http://localhost:3000/students/1](http://localhost:3000/students/1)

```

Kết quả:

- Trả về sinh viên có id = 1

---

### 4.3 POST – Thêm dữ liệu

Chọn tab:

```

Body → raw → JSON

```

Nhập:

```json
{
  "name": "Chi",
  "age": 19
}
```

Request:

```
POST http://localhost:3000/students
```

Kết quả:

- Server tạo dữ liệu mới và tự sinh id

---

### 4.4 PUT – Cập nhật toàn bộ dữ liệu

```
PUT http://localhost:3000/students/1
```

Body:

```json
{
  "name": "Chi Updated",
  "age": 20
}
```

---

### 4.5 PATCH – Cập nhật một phần dữ liệu

```
PATCH http://localhost:3000/students/1
```

Body:

```json
{
  "age": 21
}
```

---

### 4.6 DELETE – Xóa dữ liệu

```
DELETE http://localhost:3000/students/1
```

Kết quả:

- Bản ghi bị xóa khỏi database

---

## 5. Cấu trúc một HTTP Request trong Postman

### Method

Xác định hành động với dữ liệu:

- GET
- POST
- PUT
- PATCH
- DELETE

### URL

Địa chỉ API cần gọi.

### Headers

Thông tin bổ sung cho request.

Ví dụ:

```
Content-Type: application/json
```

### Body

Dữ liệu gửi lên server (thường dùng với POST / PUT / PATCH).

---

## 6. Quan sát Response

Sau khi nhấn **Send**, sinh viên cần chú ý:

- Status Code (200, 201, 404…)
- Response Time
- JSON Data trả về

Ví dụ response:

```json
{
  "id": 3,
  "name": "Chi",
  "age": 19
}
```

---

## 7. Quy trình luyện tập với Postman

Sinh viên nên thực hành theo thứ tự:

1. Chạy JSON Server
2. Dùng Postman gọi GET xem dữ liệu
3. Thử POST thêm dữ liệu mới
4. Thử PATCH sửa dữ liệu
5. Thử DELETE xóa dữ liệu
6. Sau mỗi bước gọi lại GET để kiểm tra kết quả

---

## Các lỗi thường gặp và Cách khắc phục

### 1. Không kết nối được server

Nguyên nhân:

- JSON Server chưa chạy

Cách sửa:

```bash
json-server --watch db.json
```

---

### 2. Sai Method

Ví dụ:

- Muốn thêm dữ liệu nhưng lại dùng GET

Cách sửa:

- Đổi sang POST

---

### 3. Sai định dạng JSON

Sai:

```json
{
  "name": "Chi"
}
```

Đúng:

```json
{
  "name": "Chi"
}
```

---

### 4. Sai URL

Ví dụ:

```
/student
```

Trong khi đúng là:

```
/students
```

---

> **Mẹo nhỏ:** Luôn test API bằng Postman trước khi viết Fetch API trong JavaScript để tránh mất thời gian debug giao diện.

```

```
