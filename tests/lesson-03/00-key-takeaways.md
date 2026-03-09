# 📚 LESSON 03 - KEY TAKE NOTE - DAY 06/03/2026 
> ghi chú những gì đã học được ở Day 3 ở đây

## ✅ GIT

### GIT - Undo Action
> Undo things

#### GIT - Undo commit message

Cách thay đổi commit message sau khi đã commit:

```git commit --amend -m```

#### GIT - Un-Stage

Cách đưa nhưng file đã add vào **Staging state** về lại **Working Directory** stag 

Cách un-stage 1 file cụ thể:

```git restore --stage <file_name>```

Cách un-stage all files:

```git restore --stage .```

#### GIT - Un-Commit

- Lệnh để reverse lại những file từ last commit từ **Repository** state về:

    - **Staging state:**

        ```git reset --soft HEAD~1```

    - **Working Directory:**

        ```git reset HEAD~1```
                    
        ***Note***: version đầy đủ sẽ có từ khoá ```--mixed``` (optional), có hay không cũng được 

**NOTE**: 
- First commit không thể reset
- Nếu muốn reset -> xoá thư mục ```.git``` đi rồi init lại từ đầu

---

### GIT - Branching

#### WHAT - Git Branching là gì?

> Bản chất của nó không phải là copy mà là 1 pointer để 1 commit

#### HOW - Git Branching hoạt động như thế nào?

- Tưởng tượng Project như 1 dòng thời gian

- Branch cho phép tạo ra nhiều dòng thời gian song song cho phép:
        - **Phát triển các phần mới** mà không **ảnh hưởng** tới **phần code đang ổn định**
        - Nhiều người có làm việc **độc lập** cùng lúc trên 1 Project mà không ảnh hưởng tới nhau
        - Nếu hỏng có thể **delete 1 branch** đi mà **không gây ảnh hưởng gì**

#### Các câu lệnh khi làm việc với Branch

- **Tạo branch mới** -> ```git branch <branch_name>```

- **Checkout branch đã tạo** -> ```git checkout <branch_name>```

- **Xem list tất cả các Branch đang có** -> ```git branch```

- **Xoá branch** -> ```git branch -D <branch_name>```

- **Đưa branch lên online** -> ```git push origin <branch_name>```

- **Xoá branch trên online** -> ```git push -D origin <branch_name>```

### GIT - Ignore File

#### WHAT - File .gitignore là gì?

> ```.gitignore``` là 1 file cấu hình quan trọng, dùng để đánh dấu cho Git biết **những file và thư mục sẽ untracked (không được theo dõi)** bởi Git

#### WHY - Tại sao cần .gitignore?

Trong dự án thực thế sẽ có nhiều file không cần add lên Repository:

- File tạm thời của hệ điều hành (.DS_Store, Thumbs.db)  
- Thư mục dependencies (node_modules/, vendor/) 
- File build và artifacts (dist/, build/, *.exe)
- File cấu hình cá nhân (IDE settings, environment variables)
- File nhạy cảm (API keys, passwords, certificates)
- File log và database local

#### HOW - Cú pháp cho file .gitignore

**Comment** - dòng đầu tiên bắt đầu bằng # là ghi chú:

- \# Ignore 1 file cụ thể -> ```<file_name>```

- \# Ignore tất cả các file có extension là .log -> ```.log```

- \# Ignore thư mục -> ```<tên thư mục>/```

- \# Ignore file trong mọi thư mục con -> ```**/*.tmp```

- \# Ngoại lệ - KHÔNG ignore file này (dùng !) -> ```!important.log```

- \# Ignore file chỉ ở thư mục gốc -> ```/TODO```

- \# Ignore tất cả file .txt trong thư mục ->

```
doc/
doc/**/*.txt
```

## ✅ JavaScript Basic

### Câu Điều Kiện

> Câu điều kiện dùng để kiểm tra 1 đoạn logic trước khi chạy
- Nếu điều kiện **đúng** mới chạy, **sai** thì dừng

Có 4 loại câu điều kiện:
- if
- if ... else
- if .. else ... if ... else
- switch ... case

#### IF Statement (buổi này học if trước)

Cú pháp:

```
if (<condition>) {
    //code...
} 
```


```
<condition> = true -> thực hiện đoạn code bên trong
<conditon> = false -> dừng và thoát 
```
### Vòng lặp (loop)

> Dùng để lặp lại 1 đoạn logic, có thể lặp số lần nhất định, tuỳ theo điều kiện dừng hoặc lặp vô hạn

Trong JS có 6 loại loops:
- for (i)
- for (of)
- for (each)
- for (in)
- while
- do...while

#### FOR (i) loop (buổi này học for (i) loop trước)

Cú pháp:

```
for (<khởi tạo> ; <điều kiện lặp> : <cập nhật>) {
    //code ...
}
```

- **Khởi tạo:** chạy 1 lần duy nhất khi vòng lặp bắt đầu chạy
- **Điều kiện lặp:** nếu đúng thì chạy tiếp, nếu sai thì dừng vòng lặp lại
- **Cập nhật:** chạy vào mỗi cuối vòng lặp, thay đổi giá trị của biến đếm i

**Example**
- Lặp tiến:
```
for (let i = 0 ; i < 10 ; i++){
    console.log(i);
}
```
- Lặp lùi
```
for (let i = 10 ; i > 1 ; i--){
    console.log(i)
}
```
### Convention

**WHY - Tại sao cần Convention?**
- Code follow theo format chung
- Giúp code dễ đọc, dễ hiểu

**Một số Convention phổ biến:**
- snake_case
- kebab - case
- camelCase
- PascalCase

**Dùng trong lớp học:**
- snake_case -> tạm thời chưa dùng
- kebab - case -> đặt tên file, folder
- camelCase -> tên variable, function
- PascalCase -> tên class

### ADD ON - Console.log Nâng Cao

- Sử dụng với nháy đơn, nháy kép
``` 
console.log('hello')
console.log("hello")
```

- Sử dụng kèm với variable
```
let name = "Han"
console.log(`My name is ${name}`)
```

- Sử dụng cộng chuỗi
```
let name = "Han"
console.log("My name" + name)
```
















