// function make() {
//   return console.log("aydin");
// }

// console.log(make);
// // * fonksiyonların nerede tanımlı olduklarnın
// //   önemi bulunmamaktadır. Nerde yazılır ise yazılsın çagırıldığı yerden çalışır.
// make();
// debugger;
// make();

function yazdir(isim, soyisim) {
  debugger;
  console.log(isim + " " + soyisim);
}

debugger;
yazdir("aydin", "kaya");
yazdir("ilber", "kaya");
yazdir("enes", "yayla");

// ! Return: return altında kalan satırdaki code çalışmaz(Unreachable code detected.) (ulaşılamayan code tespit edildi)

function thisTime(time) {
  let result = time * 60;
  return result;
  let soyisim = "fff";
}

let timeResult = thisTime(60);
console.log("Time Result: " + timeResult);
