# 📚 LESSON 08 - KEY TAKE NOTE - DAY 30/03/2026 
> ghi chú những gì đã học được ở Day 8 ở đây

## ✅ Test Hook/Suite

### Test Suite 
> Tập hợp các test case => hay còn gọi là cách tổ chức code trong thực tế (project sturcture)
- Giúp nhóm các test lại
- Dễ dàng quản lý

Ví dụ:
```
test.describe("<test suite name>", async () => {
    test("test 1", async ({ page }) => {
        //code
    });

    test("test 2", async ({ page }) => {
        //code
    });

    test("test 3", async ({ page }) => {
        //code
    });

    //Các test khác ...
})
```

### Hooks

Các thời điểm khi chạy 1 test:
- Trước khi chạy
- Trong khi chạy
- Sau khi chạy
```
                            [Test]
---------------------------------------------------------------->
    <Trước khi chạy>    <Trong khi chạy>    <Sau khi chạy>
```

Các thời điểm khi chạy 1 test suite:
- Trước khi chạy
- Trong khi chạy
- Sau khi chạy
```
                                [Test 1] [Test 2] [Test n]
--------------------------------------------------------------------------------------->
    <Trước khi chạy>              <   Trong khi chạy  >              <Sau khi chạy>
```

Các thời điểm này gọi là **Hooks**, bao gồm:
- ```beforeEach```: chạy trước 1 test  
- ```beforeAll```: chạy trước 1 suite
- ```afterEach```: chạy sau 1 test
- ```afterAll```: chạy sau 1 suite

**Note:**
- ```beforeEach, beforeAll``` -> **pre-condition** => set up trước khi chạy test, hạn chế duplicate những đoạn code dùng đi dùng lại nhiều
- ```afterEach, afterAll``` -> **tear down** => dọn dẹp test env sau khi test chạy

## ✅ Git

### Git: Remote

```
git    push       origin      main
    (đẩy code)   (remote)   (nhánh)
```

```git remote``` = địa chỉ repo trên server
- Là danh sách các repo được lưu trữ ở máy chủ từ xa (remote server), cho phép bạn collaboration với người khác

Dùng để:
- push code lên
- pull code về

=> origin là tên mình đặt cho remote

```
[ Máy Local ]  ←→  [ Remote (GitHub) ]
     ↑                 ↑
   commit            push
     ↓                 ↓
   pull             fetch
```
Lệnh add remote:
```
git remote add <tên_remote> <URL Repo Github>

//Ví dụ:
    git remote add origin git@github.com:ngochando/pw-course.git
```

Lệnh xem remote hiện có:
```
git remote -v

//Output:
    origin  https://github.com/ngochando/pw-course (fetch)
    origin  https://github.com/ngochando/pw-course (push)
```

Trường hợp add nhầm remote muốn update lại:
```
git remote remove <tên_remote> //xoá remote tên origin đã thêm

git remote add <tên_remote> <new URL Repo Github> //add lại remote mới 
```

### Git: Clone, Pull, Push

**Git: Clone**

Lấy repo online về máy local của mình
```
git clone <repo URL>

//Ví dụ:
git clone git@github.com:ngochando/pw-course.git
```
Sau khi clone thành công => dùng ```npm install```, để cài đặt các package => lỗi do thiếu libary

**Git: Stashing**

- Store việc đang làm dở vào vùng nhớ tạm 
```
git stash
```

- Khi muốn làm tiếp thì có thể lấy ra những thứ đang làm dở đã store trong bộ nhớ tạm
```
git stash pop
```

### Git: Merge Request, Reviewer

Trước khi tạo branch mới:

1. Cần chekout main đầu tiên 

    ```git checkout main```

2. Trước khi làm bất cứ thứ gì, thao tác pull code từ main về 

    ```git pull origin main```

3. Tạo branch mới 

    ```git checkout -b <tên_branch>```

4. Đưa nhánh đó lên github

    ```
    git add .
    git commit -m "<message>"
    git push origin <tên_branch>    
    ```

Pull request cần lưu ý:
- Title rõ ràng, ngắn gọn, dễ hiểu
- Description rõ ràng, ngắn gọn, dễ hiểu