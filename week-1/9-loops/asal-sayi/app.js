let sayi = Number(prompt("Lütfen bir sayi giriniz: "));
let sonuc = true;

for (let i = 2; i <= Math.floor(sayi / 2); i++) {
  if (sayi % i == 0) {
    sonuc = false;
    break;
  }
}

if (sonuc) {
  console.log(sayi + "asaldir");
} else {
  console.log(sayi + "ASAL DEĞİLDİR.");
}
