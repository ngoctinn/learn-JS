// sử dụng vòng lặp for để in ra các số từ 1 đến 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// sử dụng vòng lặp while để in ra các số từ 1 đến 10
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
// sử dụng vòng lặp do...while để in ra các số từ 1 đến 10
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 10);
// sử dụng vòng lặp for...in để in ra các key của object
let myObject = {
  name: "JS",
  age: 10,
  isCool: true,
};
for (let key in myObject) {
  console.log(key);
}
