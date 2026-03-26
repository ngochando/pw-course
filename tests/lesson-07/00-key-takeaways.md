gi# 📚 LESSON 07 - KEY TAKE NOTE - DAY 23/03/2026 
> ghi chú những gì đã học được ở Day 6 ở đây

## ✅ DOM: Relation

DOM - Visualize -> Mô tả trên một cây

**DOM - Quy Ước:** 
- Node gốc -> màu xanh dương
- Node hiện tại -> màu xanh lá
- Node cần chú ý -> màu cam

![alt text](<Screenshot 2026-03-26 at 02.08.30.png>)

**Relation:**

- ```self```: là node hiện tại

- ```parent```: cha -> là node phía trên trực tiếp của node hiện tại

- ```children```: con -> là các node phía dưới trực tiếp của node hiện tại

- ```ancestor```: tổ tiên

![alt text](image.png) 

- ```descendant```: hậu duệ -> là node con, cháu, chắt, ...

![alt text](image-1.png)

- ```sibling```: anh em -> là những phần tử cùng cấp và cùng cha

![alt text](image-2.png)

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

![alt text](image-3.png)

![alt text](image-4.png)

![alt text](image-5.png)

![alt text](image-6.png)