let number = Number(
  prompt("Faktörüyelini hesaplamak istediğiniz sayıyı giriniz")
);
let carpim = 1;

for (let i = 1; i <= number; i++) {
  carpim *= i;
}

console.log(carpim);

alert(number + " sayisin faktöriyeli: " + carpim);
