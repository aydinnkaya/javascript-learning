// Her bir sayının rakamlarının küpünün toplamı kendisini veriyor ise bu sayıya armstrong sayısı denir.
// * 153 - 370 -407

let sayi = prompt("Sayi giriniz");
let toplam = 0;

for (let i = 0; i < sayi.length; i++) {
  let rakam = sayi.charAt(i);
  toplam += rakam * rakam * rakam;
}

if (sayi == toplam) {
  alert(sayi + " bir armstrong sayidir");
} else {
  alert(sayi + " bir armstrong sayi değildir");
}
