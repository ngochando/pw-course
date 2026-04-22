# 📚 LESSON 11 - KEY TAKE NOTE - DAY 17/04/2026 
> ghi chú những gì đã học được ở Day 11 ở đây

## FIXTURES
> Playwright docs: https://playwright.dev/docs/test-fixtures

### 🧩 WHAT - Fixtures là gì?

**Test fixture** = mọi thứ bạn chuẩn bị sẵn để test có thể chạy

**Cấu trúc 1 fixture**
```
Setup --> chuẩn bị
...
Use --> đưa vào test (test run)
...
Tear down --> dọn dẹp (nếu cần)
...
```

#### Built-in Fixture

| Fixture      | Type               | Description                                                                 |
|-------------|--------------------|-----------------------------------------------------------------------------|
| page        | Page               | Isolated page for this test run.                                            |
| context     | BrowserContext     | Isolated context for this test run. The `page` fixture belongs to this context as well. Learn how to configure context. |
| browser     | Browser            | Browsers are shared across tests to optimize resources. Learn how to configure browsers. |
| browserName | string             | The name of the browser currently running the test. Either `chromium`, `firefox` or `webkit`. |
| request     | APIRequestContext  | Isolated APIRequestContext instance for this test run.                      |

#### Giải thích rõ mối quan hệ giữa browser → context → page
```
Browser (shared - 1 instance)
├── Context 1 (isolated - giống incognito)
│   ├── Page 1 (tab)
│   ├── Page 2 (tab)
│   └── Page 3 (tab)
│
├── Context 2 (isolated khác)
│   ├── Page 1
│   └── Page 2
│
└── Context 3
    └── Page 1
```

---

##### 🎯 Mapping với Playwright fixtures

```
browser  → Browser
context  → Context
page     → Page
```

---

##### 🧠 Hiểu nhanh trong 10s

```
1 Browser
 └── nhiều Context (cách ly nhau)
      └── nhiều Page (tabs)
```

---

##### 🔥 Insight quan trọng (rất đáng nhớ)

```
Test = chạy trong 1 Context riêng
→ nên không bị leak data giữa test
```

---

##### ⚡ Ví dụ thực tế

```
Test A
└── Context A
    └── Page → login user A

Test B
└── Context B
    └── Page → chưa login
```

👉 2 test không ảnh hưởng nhau

---

### Câu hỏi phỏng vấn

- Trong Playwright Test, **built-in fixture** nào dùng để quản lý một session trình duyệt riêng biệt (isolated) cho mỗi test?

    - Đáp án đúng: context

    - Giải thích:

        - **context**: Đúng. Trong Playwright, context (BrowserContext) đại diện cho một session trình duyệt ẩn danh. Nó cách ly hoàn toàn dữ liệu (cookies, local storage, cache...) giữa các test với nhau.

        - **browser**: Sai. Đây là toàn bộ ứng dụng trình duyệt. Playwright thường dùng chung một browser cho nhiều test để chạy nhanh hơn, nên nó không phải là lớp đảm bảo tính cách ly.

        - **page**: Sai. Nó chỉ là một thẻ (tab) nằm bên trong context. Dù mỗi test dùng một page mới, sự cách ly về session thực chất do context quản lý.

        - **request**: Sai. Đây là fixture dùng để gọi các API (API testing) trực tiếp mà không cần giao diện, không liên quan đến session trình duyệt.

---

- Nếu một custom fixture phụ thuộc fixture khác, Playwright xử lý thế nào? 

    - Inject fixture phụ thuộc qua tham số và resolve theo thứ tự

    - Trả lời chi tiết hơn theo mô hình **5W**

#### 🎯 **WHAT – Fixture là gì?**

> Fixture là cơ chế cung cấp **dependency (data, state, object)** cho test thông qua **Dependency Injection**.

---

#### 🎯 **WHY – Tại sao cần?**

> Để đảm bảo **test isolation**, tránh phụ thuộc giữa các test và không phải tự quản lý **setup/teardown** thủ công.

---

#### 🎯 **HOW – Nó hoạt động như thế nào?**

> Dependency được khai báo qua **tham số**, Playwright sẽ build **dependency graph**, rồi tự động:

* setup theo thứ tự dependency
* chạy test
* teardown theo thứ tự ngược lại

---

#### 🎯 **WHEN – Khi nào dùng?**

> Khi cần:

* setup môi trường (login, data, API…)
* tái sử dụng logic
* quản lý lifecycle test rõ ràng

---

#### 🎯 **WHERE – Dùng ở đâu?**

> Trong test file thông qua `{ fixtureName }` hoặc định nghĩa trong file fixture dùng chung cho toàn project.

---

#### 🧠 Câu chốt (ghép lại 1 đoạn khi trả lời)

- Fixture trong Playwright là một cơ chế Dependency Injection dùng để cung cấp dependency cho test. 

- Nó giúp đảm bảo test isolation và loại bỏ việc quản lý setup/teardown thủ công. 

- Playwright dựa vào các tham số để build dependency graph, tự động resolve thứ tự thực thi và teardown. 

- Fixture thường được dùng khi cần setup môi trường, tái sử dụng logic và được inject trực tiếp vào test hoặc dùng chung toàn project.


