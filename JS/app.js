// promptdan 1-999 oralig'idan son qabul qilasiz. Kiritgan sonni harf ko'rinishida ifoda etasiz. Misol uchun 345 kiritsa uch yuz qirq besh deb qaytarishi kerak. Agar 1-999 oralig'ida bo'lmagan yoki boshqa narsa kiritsa Xatolik! deb chiqarishi kerak.

let son = parseInt(prompt("1 dan 999 gacha son kiriting:"));

let birlik = ["", "bir", "ikki", "uch", "to‘rt", "besh", "olti", "yetti", "sakkiz", "to‘qqiz"];
let onlar = ["", "o‘n", "yigirma", "o‘ttiz", "qirq", "ellik", "oltmish", "yetmish", "sakson", "to‘qson"];
let yuzlar = ["", "bir yuz", "ikki yuz", "uch yuz", "to‘rt yuz", "besh yuz", "olti yuz", "yetti yuz", "sakkiz yuz", "to‘qqiz yuz"];

if (son >= 1 && son <= 999) {
  let yuz = Math.floor(son / 100);
  let on = Math.floor((son % 100) / 10);
  let bir = son % 10;

  let natija = `${yuzlar[yuz]} ${onlar[on]} ${birlik[bir]}`;
  alert(natija.trim());
} else {
  alert("Xatolik!");
}


