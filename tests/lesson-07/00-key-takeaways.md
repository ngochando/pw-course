# 📚 LESSON 07 - KEY TAKE NOTE - DAY 23/03/2026 
> ghi chú những gì đã học được ở Day 6 ở đây

## ✅ DOM: Relation

DOM - Visualize -> Mô tả trên một cây

**DOM - Quy Ước:** 
- Node gốc -> màu xanh dương
- Node hiện tại -> màu xanh lá
- Node cần chú ý -> màu cam

![alt text](<images/Screenshot 2026-03-26 at 02.08.30.png>)

**Relation:**

- ```self```: là node hiện tại

- ```parent```: cha -> là node phía trên trực tiếp của node hiện tại

- ```children```: con -> là các node phía dưới trực tiếp của node hiện tại

- ```ancestor```: tổ tiên

![alt text](<images/Screenshot 2026-03-26 at 02.12.20.png>) 

- ```descendant```: hậu duệ -> là node con, cháu, chắt, ...

![alt text](<images/Screenshot 2026-03-26 at 02.14.50.png>)

- ```sibling```: anh em -> là những phần tử cùng cấp và cùng cha

![alt text](<images/Screenshot 2026-03-26 at 02.16.29.png>)

- ```following```: theo sau -> gồm tất cả các node ở phía bên tay phải của node hiện tại
    - Không lấy những thằng con của node hiện tại
    - Note: lấy tất cả các node theo sau trong cây (tính cả các con bên trong) -> chọn rất nhiều - hạn chế dùng

- ```following-sibling```: anh em phía sau (```following + sibling```)

- ```preceding```: phía trước -> gồm các node ở phía (trước) bên tay trái của node hiện tại (**trứ các node ancestor**)

- ```preceding-sibling```: anh em phía trước (```preceding + sibling```)

## ✅ XPath - Advance Methods

**Xpath axes methods (phương thức trục XPath)** -> để điều hướng và chọn các node trong cây DOM
=> XML/HTML dựa trên mối quan hệ giữa các node với nhau

**Công dụng:**
- Tìm kiếm elements dựa trên **vị trí tương đối** (parent, child, sibling, ancestor, ...)
- **Linh hoạt** hơn việc chỉ dung đường dẫn tuyệt đối hoặc tương đối

- ```Wildcard```: * -> tìm khớp hết tất cả
    - ```//*[@id="my-id"]``` -> hữu hiệu trong trường hợp biết attribute mà không biết cụ thể tag là gì, khớp tất cả các loại thẻ

**Syntax**: ```[selector]/[relation]::[filter]```

- ```child``` -> Con trực tiếp
    - ```div[@class="my-test"]/child::h1```

- ```descendant``` -> Tất cả con cháu
    - ```div[@class="my-test"]/descendant::h1```

- ```parent``` -> Tìm cha
    - ```div[@class="my-test"]/parent::h1```

- ```ancestor``` -> Tìm tổ tiên
    - ```div[@class="my-test"]/ancestor::h1```

- ```following-sibling``` -> Tìm anh em phía sau
    - ```div[@class="my-test"]/following-sibling::h1```

- ```preceding-sibling``` -> Tìm anh em phía trước
    - ```div[@class="my-test"]/preceding-sibling::h1```

- ```ancestor-or-self``` - Tổ tiên hoặc chính nó
    - ```div[@class="my-test"]/ancestor-or-self::h1```

- ```descendant-or-self``` - Con cháu hoặc chính nó
    - ```div[@class="my-test"]/descendant-or-self::h1```

**XPath: axes** 

```//tag/relationship::tagname[@attribute='value']```
- parent
- child
- ancestor
- descendant
- following
- preceding
- following-sibling
- preceding-sibling

**AND và OR operators**

- **AND - Tất cả điều kiện phải đúng**

    - ```//element[@condition1 and @condition2]```

- **OR - Một trong các điều kiện đúng**

    - ```//element[@condition1 or @condition2]```

- **Kết hợp AND và OR**
    - ```//element[@condition1 and @condition2 or @condition3]```

**Lấy text bên trong element** -> hay dùng trong thực tế

```text()``` lấy node trực tiếp của element
- ```element[text()="<text>"]```

**contain()s: Kiểm tra chứa chuỗi con**
- Tìm element có chứa một phần text, không cần khớp chính xác
```
contains(vế 1 [phần tử muốn tìm], vế 2 [content cần tìm] ) 

Ví dụ: muốn tìm text
contains(text(), "Giờ địa phương")
```
**normalize-space** -> trim space thừa đầu, cuối, giữa

- ```contains(normalize-space(text(), "    Giờ    địa    phương      ")```

## Kiến thức XPath Function thêm

**Xpath Function**
| Nhóm | Function | Cú pháp | Mô tả | Ví dụ |
|------|--------|--------|------|------|
| String | concat() | concat(str1, str2, ...) | Nối chuỗi | concat('Hello',' ','World') |
| String | contains() | contains(str, substr) | Kiểm tra chứa | //div[contains(@class,'active')] |
| String | starts-with() | starts-with(str, prefix) | Bắt đầu bằng | //input[starts-with(@id,'user')] |
| String | ends-with() | ends-with(str, suffix) | Kết thúc bằng | ends-with('hello.txt','.txt') |
| Transform | lower-case() | lower-case(str) | Chữ thường | lower-case('HELLO') |
| Transform | upper-case() | upper-case(str) | Chữ hoa | upper-case('hello') |
| Transform | normalize-space() | normalize-space(str) | Xoá khoảng trắng dư | normalize-space(' Hello ') |
| Transform | translate() | translate(str, from, to) | Thay ký tự | translate('abc','a','x') |
| Length | string-length() | string-length(str) | Độ dài chuỗi | string-length('Hello') |
| Advanced | replace() | replace(str, pattern, replacement) | Regex replace | replace('hello','l','L') |
| Advanced | tokenize() | tokenize(str, pattern) | Tách chuỗi | tokenize('a,b,c',',') |

---

**XPath Axes**
| Nhóm | Axes | Mô tả | Ví dụ |
|------|------|------|------|
| Con cháu | child:: | Con trực tiếp (cấp 1) | //article/child::p |
| Con cháu | descendant:: | Tất cả con cháu | //article/descendant::span |
| Con cháu | descendant-or-self:: | Bao gồm chính nó | //div/descendant-or-self::div |
| Tổ tiên | parent:: | Cha trực tiếp | //p/parent::div |
| Tổ tiên | ancestor:: | Tất cả tổ tiên | //span/ancestor::article |
| Tổ tiên | ancestor-or-self:: | Bao gồm chính nó | //span/ancestor-or-self::span |
| Anh em | following-sibling:: | Anh em phía sau | //h2/following-sibling::p |
| Anh em | preceding-sibling:: | Anh em phía trước | //p/preceding-sibling::p |
| Toàn document | following:: | Tất cả node phía sau | //footer/following::div |
| Toàn document | preceding:: | Tất cả node phía trước | //footer/preceding::div |

---

**So sánh Axes**
| So sánh | A | B | Khác biệt |
|--------|---|---|----------|
| Con cháu | child | descendant | child = 1 cấp, descendant = mọi cấp |
| Tổ tiên | parent | ancestor | parent = 1 cấp, ancestor = nhiều cấp |
| Phạm vi | sibling | following | sibling = cùng cấp, following = toàn bộ phía sau |

---

**Kết hợp Axes (Real Use Cases)**
| Use case | XPath |
|---------|------|
| Lên cha rồi xuống con | //span[@class='author']/parent::div/child::span |
| Lên tổ tiên rồi xuống | //span[@class='date']/ancestor::article/child::h2 |
| Lấy anh em phía sau | //h2[@id='title1']/following-sibling::p |
| Lấy anh em phía trước | //p[@class='content']/preceding-sibling::p |
| Giới hạn số lượng | //h2[@id='title1']/following-sibling::p[position() <= 2] |

---

**Ví dụ thực tế**
| XPath | Kết quả |
|------|--------|
| //article/child::p | Tất cả p con trực tiếp |
| //article/descendant::span | Tất cả span bên trong |
| //h2/following-sibling::p | Các p sau h2 |
| //footer/preceding::h2 | Tất cả h2 trước footer |
| //nav/child::a | Tất cả link trong nav |

---

**Mental Model**
| Hướng | Axes |
|------|------|
| Down | child, descendant |
| Up | parent, ancestor |
| Side | sibling |
| Global | following, preceding |

---

**One-liner nhớ nhanh**

XPath = Di chuyển trong DOM tree theo 4 hướng:
DOWN / UP / SIDE / GLOBAL
1. parent / ancestor → đi lên
2. child / descendant → đi xuống
3. sibling → đi ngang
4. following / preceding → quét toàn document
5. Có thể combine: lên → xuống → ngang


## ✅ Playwright - Assertion

Các loại assertion:
- **Generic Assertions** (từ thư viện expect) - Selenium
    - ```expect(giá trị) = (giá trị)```

- **Web-first Assertions** (auto-waiting)
    - ```expect(locator) có giá trị``` => dùng cho các element trên web, auto wait cho đến khi điều kiện được thoả mãn => giải quyết vấn đề về timming

### AUTO-WAIT MindMap
```
AUTO-WAIT
│
├── WHAT (Là gì?)
│   ├── Cơ chế tự động chờ + retry
│   ├── Đợi đến khi điều kiện đúng hoặc timeout
│   └── Thay vì check 1 lần → check nhiều lần
│
├── WHY (Tại sao cần?)
│   ├── UI hiện đại:
│   │   ├── Async loading
│   │   ├── API delay
│   │   └── Rendering từng phần
│   │
│   ├── Giải quyết:
│   │   ├── Flaky test ❌ → giảm ✅
│   │   ├── Manual wait ❌ → bỏ ✅
│   │   └── Sync với UI ✅
│
├── WHEN (Khi nào dùng?)
│   ├── UI testing:
│   │   ├── Check element visible
│   │   ├── Check text
│   │   ├── Check count
│   │   └── Click / fill
│   │
│   └── KHÔNG dùng:
│       ├── Logic JS
│       ├── API response
│       └── Static value
│
├── WHERE (Áp dụng ở đâu?)
│   ├── Assertions:
│   │   ├── toBeVisible()
│   │   ├── toHaveText()
│   │   └── toHaveCount()
│   │
│   └── Actions:
│       ├── click()
│       ├── fill()
│       └── type()
│
├── BENEFITS (Lợi ích)
│   ├── Giảm flaky test 🔥
│   ├── Không cần viết wait
│   ├── Code ngắn, dễ đọc
│   ├── Retry thông minh
│   └── Tăng tốc dev & CI
│
├── PERFORMANCE
│   ├── Nhược:
│   │   └── Có thể chậm từng step
│   │
│   └── Ưu:
│       ├── Không wait dư
│       ├── Ít rerun
│       └── Nhanh hơn tổng thể
│
└── SO SÁNH VỚI SELENIUM
    │   ├── Assertion:
    │   │   └── Generic (check 1 lần)
    │   │
    │   ├── Wait:
    │   │   └── Manual (explicit wait)
    │   │
    │   ├── Behavior:
    │   │   ├── Dễ check quá sớm
    │   │   ├── Phải tự control timing
    │   │   └── Dễ flaky
    │   │
    │   └── Code:
    │       └── Dài, dễ sai
    │
    └── PLAYWRIGHT    
        ├── Assertion:
        │   └── Auto-wait (retry)
        │
        ├── Wait:
        │   └── Built-in
        │
        ├── Behavior:
        │   ├── Check đúng thời điểm
        │   ├── Tự retry
        │   └── Ít flaky
        │
        └── Code:
            └── Ngắn, dễ maintain
```
### Mindset
- **Selenium** tự mình phải:
    - Quyết định chờ gì
    - Chờ bao lâu
    - Chờ lúc nào

- **Playwright**
    - Chỉ cần quyết định expect gì
    - Framework sẽ quyết định cách chờ