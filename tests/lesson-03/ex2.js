/*
Các thông số sức khỏe được tính như sau:
Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
Mức cân tối đa = Bằng số lẻ của chiều cao (tính bằng cm)
Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10
Như vậy, nếu bạn cao 1,7m, tức 170cm thì :
Cân cân nặng lý tưởng của bạn là: 70 x 9: 10 = 63 kg
Cân nặng tối đa là: 70kg
Cân nặng tối thiểu là: 70 x 8 :10 = 56 kg
Phạm vi áp dụng: Công thức áp dụng cho 100 < chiều cao < 200

Tạo file ex2.js, thêm vào code đáp án cho đề bài sau:
a. Khai báo chiều cao của bạn (cm)
b. In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng một dòng.
*/

let height = 162;

const remainder = height % 100;
console.log ("So le trong chieu cao: " + remainder);

let idealWeight = remainder * 9 /10;

let minWeight = remainder * 8 /10;

console.log(`Cân nặng lý tưởng ${idealWeight}kg, cân nặng tối đa ${remainder}kg, cân nặng tối thiểu ${minWeight}kg`);

 

