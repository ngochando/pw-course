/*
Tạo file ex3.js, thêm vào đáp án cho câu hỏi sau: Cho 2 biến: a = true, b = false, c =
true. Theo bạn, kết quả của các biểu thức sau là gì?
a. a && b && c 
b. a && b || c
*/

/*
Đáp án: 
a) a && b && c - Output: false (a && b = false -> false && c -> fasle)
b) a && b || c - Output: true (a && b = false -> false || c -> true)
*/

let a = true;
let b = false;
let c = true;

console.log(a && b && c)
console.log(a && b || c)


