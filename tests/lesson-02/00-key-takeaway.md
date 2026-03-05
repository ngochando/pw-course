# 📚 LESSON 02 - KEY TAKE NOTE - DAY 02/03/2026 
> ghi chú những gì đã học được ở Day 2 ở đây

## ✅  GIT & GITHUB

### WHAT - GIT là gì?
Git là **Distributed Version Control System** --> giúp mình quản lý tất cả các phiên bản đã tạo ra

Được tạo ra bởi **Linux Torvalds**

### WHY - Tại sao phải sử dụng GIT?
- Giúp quản lý Code

### SO SÁNH GIT và GITHUB

| Git | GitHub |
|:-----|:----|
| là 1 phần mềm chạy trên local computer | là 1 web service |
| là công cụ quản lý phiên bản, đưa file vào Git repository | là web service có giao diện |
| Có các tính năng của Version control system | Có các tính năng của Version control system và các tính năng khác, ví dụ như GitHub Action, Github Copilot | 

### HOW - GIT hoạt động như thế nào?
> Git có 3 trạng thái:

**Working Directory** -> chứa những thứ mà chúng ta mới/đang làm việc cùng (Ví dụ: new file, file có thay đổi)

- ```git init``` (Git Initialization) -> Khởi tạo Git Repo trên local 

**Staging** -> vùng đệm chờ trước khi commit lên Repo
- ```git add .``` -> Add tất cả nhưng file đang có ở Working Directory state vào Staging
- ```git add <file name>``` -> Add 1 file cụ thể
- ```git add <file name 1> <file name 2> <file name n>``` ->> Add nhiều file cùng 1 lúc

>**Commit** (snapshot) lưu lại trạng thái các thay đổi đã được thêm vào Staging -- lịch sử các phiên bản thay đổi: 

```git commit -m "<message>"```

- *Commit message - Convention:* ``` git commit -m "<type> : <short_description>"```
    - **Type:** có 3 loại phổ biến
        - chore: sửa nhỏ lẻ, chính tả, xoá file không dùng tới, ...
        - feat: thêm tính năng mới, tcs mới (làm bài tập thì sẽ là cái này)
        - fix: sửa lỗi 1 test trước đó
    - **Short_description:**
        - max 50 characters, ngắn gọn, dễ hiểu, nên dùng tiếng anh

**Repository** -> vùng chứa tất cả các phiên bản
- ```git push origin main```

---

> **Các lệnh khác**:

```git status``` -> check status của các file xem đang ở state nào?

```git log``` -> xem info log của từng phiên bản đã push lên 

### GIT CONFIG (Cấu hình GIT)

> **WHY - Tại sao phải Config???**  --> GIT dựa vào đây để biết **Mình là ai?** 

#### **Có 2 loại config:**

**Config chung (Default) - Global:** 

``` 
git config --global user.name "your_name"
git config --global user.email "your_email"
```
- Đứng ở terminal - path nào cũng hiểu (global - toàn cục) 
- Mặc định sử dụng, và chỉ cần config 1 lần duy nhất

**Config riêng:** config riêng setup cho từng Project riêng biệt khi cần
``` 
git config user.name "your_name"
git config user.email "your_email"
```
- Buộc phải đứng đúng ở path của Project muốn config
- Dùng khi phải shadow người khác trong 1 Project 

> __Note__: Câu lệnh để xem tất cả các info đã config --> ```git config --list```

### GIT - Simple Flow
**Không dùng Global Config** 

> ```init``` --> ```config``` --> ```add``` --> ```commit``` --> ```push```

**Dùng Global Config**

> ```init``` --> ```add``` --> ```commit``` --> ```push```

## ✅ JAVASCRIPT BASIC

Cách run 1 file JS -->  ```node file_name.js```

Câu lệnh để in ra console --> ```console.log()```

### Variable - Biến
> Biến thiên - Có thể thay đổi, và ghi đè được

**Syntax:**
- Khai báo biến ```let <variable_name> = <value>```

### Constant - Hằng số
> Không thể thay đổi, dùng trong các trường hợp ví dụ như giá trị đó chỉ dùng 1 lần duy nhất hoặc không có nhu cầu thay đổi về sau (ví dụ: số Pi)

**Syntax:**
- Khai báo hằng ```const <constant_name> = <value>```

---
***Note:*** Khi nào dùng Biến, khi nào dùng Hằng?
- Default thì nên dùng ***const (hằng)***, chỉ dùng ***let (biến)*** khi chắc chắn sẽ cần gán hoặc ghi đè value về sau

### Data Type
> 1 variable/constant đều phải có kiểu dữ liệu --> Kiểu dữ liệu là loại dữ liệu mà biến đó đang mang

JS có __8 loại__ dữ liệu, chia ra làm __2 nhóm__:
- Kiểu **nguyên thuỷ**: Day 2 học 3 loại đầu tiên
    - **Number**
    - **String**
    - **Boolean**
    - Undefined
    - Null
    - Symbol
    - BigInt
- Kiểu **tham chiếu** (references types):
    - Object

### Toán tử so sánh
> Dùng để so sánh 2 toán hạng => Output cho ra là kiểu Boolean

**Trường hợp đặc biệt** --> Khi nào thì so sánh bằng dùng ```==```, khi nào thì so sánh dùng ```===```?
```
a = 3 --> kiểu Number
b = "3" --> kiểu String
```

- ```==```: so sánh mà không cần quan tâm kiểu dữ liệu là gì
    - Ví dụ:
        ```
        let a = 3;
        let b = "3";

        console.log(a == b)

        Output: True
        ```
- ```===```: so sánh 2 toán hạng có cùng kiểu dữ liệu (__luôn ưu tiên dùng kiểu này__ )
    - Ví dụ:
        ```
        let a = 3;
        let b = "3";

        console.log(a === b)

        Output: False
        ```

### Toán tử Logic
> Dùng để kết hợp nhiều điều kiện trong câu điều kiện => trả về Boolean

- **Toán tử AND (&&)**
Trả về True --> Khi cả 2 vế của mệnh đề đều đúng

- **Toán tử OR (||)**
Trả về True --> Khi 1 trong 2 vế của mệnh đề đúng

### Toán tử 1 ngôi
> Toán tử chỉ cần 1 toán hạng để thực hiện

- **Toán tử 2 ngôi**
```
Ví dụ: a = b + c
   b, c: toán hạng
   +: toán tử => là toán tử 2 ngôi do cần tới 2 toán hạng mới thực hiện được
```
- **Toán tử 1 ngôi**
> Có 2 loại: Prefix và Postfix
- Prefix: toán tử nằm phía trước --> tăng trước, trả về sau
    - ```++a```
    - ```--a```

Ví dụ **a = 2** thì ```++a``` sẽ cộng 1 vào a sau đó mới trả kết quả ra là 3

- Postfix: toán tử nằm phía sau --> trả về trước, sau đó mới tăng
    - ```a++```
    - ```a--```

Ví dụ **a = 6** thì ```a--``` sẽ là trả về a = 6 trước, sau đó mới giảm đi 1 và kết quả ra là 5

```
let a = 5;
//Chỉ cần 1 toán hạng là a để thực hiện
a++ => Output: 6
++a => Output: 6
a-- => Output: 4
--a => Output: 4
```

### Toán tử số học
> Tương tự như các phép cộng trừ nhân chia đã học

- Cộng: +
- Trừ: -
- Nhân: *
- Chia: /
- Chia lấy dư: %












