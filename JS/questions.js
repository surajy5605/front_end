// JavaScript Math Methods – All 20 in One Script

console.log("===== 1. Round Up =====");
let num1 = 4.2;
console.log(Math.ceil(num1));

console.log("===== 2. Round Nearest (.5 up) =====");
let num2 = 4.5;
console.log(Math.round(num2));

console.log("===== 3. Absolute Value =====");
let num3 = -25;
console.log(Math.abs(num3));

console.log("===== 4. Dice (1–6) =====");
let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

console.log("===== 5. Random (1–100) =====");
let random100 = Math.floor(Math.random() * 100) + 1;
console.log(random100);

console.log("===== 6. Random Array Index =====");
let arr = ["A", "B", "C", "D"];
let randomIndex = Math.floor(Math.random() * arr.length);
console.log(randomIndex, arr[randomIndex]);

console.log("===== 7. Highest Score =====");
let scores = [45, 88, 12, 99, 67];
console.log(Math.max(...scores));

console.log("===== 8. Lowest Score =====");
console.log(Math.min(...scores));

console.log("===== 9. Clamp Between 0 and 100 =====");
let valueClamp = 120;
let clamped = Math.min(Math.max(valueClamp, 0), 100);
console.log(clamped);

console.log("===== 10. Larger of Two Numbers =====");
let a = 45;
let b = 78;
console.log(Math.max(a, b));

console.log("===== 11. Distance Between Two Points =====");
let x1 = 2, y1 = 3;
let x2 = 6, y2 = 7;
let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log(distance);

console.log("===== 12. Hypotenuse =====");
let side1 = 3;
let side2 = 4;
console.log(Math.hypot(side1, side2));

console.log("===== 13. Vector Magnitude =====");
let vx = 5;
let vy = 12;
console.log(Math.hypot(vx, vy));

console.log("===== 14. Floor (Pagination Safe) =====");
let page = 4.9;
console.log(Math.floor(page));

console.log("===== 15. Truncate Decimal =====");
let decimalNumber = 4.9;
console.log(Math.trunc(decimalNumber));

console.log("===== 16. Enforce Max Limit =====");
let valueMax = 150;
let maxLimit = 100;
console.log(Math.min(valueMax, maxLimit));

console.log("===== 17. Power =====");
console.log(Math.pow(2, 3));
console.log(2 ** 3);

console.log("===== 18. Square Root =====");
console.log(Math.sqrt(64));

console.log("===== 19. Cube Root =====");
console.log(Math.cbrt(27));

console.log("===== 20. Fair Lottery Number =====");
let min = 1;
let max = 50;
let lottery = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(lottery);
