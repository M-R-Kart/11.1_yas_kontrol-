//* Yaş Kontrolü
//? Kullanıcıdan yaşını iste ve şu kurallara göre mesaj göster:

//? Eğer yaş 18'den küçükse "Reşit değilsiniz" mesajı ver.
//? Eğer yaş 18 ve 65 arasında ise "Yetişkin" mesajı ver.
//? Eğer yaş 65'ten büyükse "Emeklisiniz" mesajı ver.

//! Kullanıcıdan yaş bilgisi al
let yas = prompt("Yaşınızı giriniz.");

//! Yaşı sayıya çevir (çünkü prompt her zaman string döndürür)
yas = parseInt(yas);

//! Eğer yaş bilgisi geçerli bir sayıysa koşulları kontrol et
if (isNaN(yas)) {
  console.log("Lütfen geçerli bir yaş girin.");
} else if (yas < 18) {
  console.log("Reşit Değilsiiz.");
} else if (yas >= 18 && yas < 65) {
  console.log("Yetişkin grubundasınız.");
} else if (yas >= 65) {
  console.log("Emeklisiniz.");
}

console.log(yas);

/*
Nasıl Çalışır?
1-prompt() ile kullanıcıdan yaş bilgisi alıyoruz.
2-parseInt() kullanarak string değeri bir tam sayıya çeviriyoruz.
3-isNaN() fonksiyonu, girilen değerin geçerli bir sayı olup olmadığını kontrol ediyor.
4-if-else yapısıyla yaşa göre uygun mesajı gösteriyoruz.
*/
