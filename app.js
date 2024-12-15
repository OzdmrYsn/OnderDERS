// //! locaStorage
// //* yerel depolama alanında veri saklamak için kullanılır.
// //* tarayıcıyı kapattığınızda veya sayfayı yenilediğinizde bile verilerin korunmasını sağlar.

// //* 'localStorage' kullanarak Veri Saklama, Veri Erişimi yönetimi ve farklı Veri türlerini saklamak için aşağıda ki örneklere göz atabilirsiniz.

// //* Veri ekleme
// localStorage.setItem("Yasin2","15")


// localStorage.setItem("Yasin", "24"); // 'setItem' ile verileri ekleyebilirsiniz.
// localStorage.setItem("age", "28");

// localStorage.setItem("Ad","Yasin")

// //* Veri alma
// var username = localStorage.getItem("username"); // 'getItem' yöntemiyle veriyi çekebilirsiniz.
// var age = localStorage.getItem("age");

// let yas = localStorage.getItem("Ad")
// console.log(yas);


// console.log(username)

// //* Veri silme
// localStorage.removeItem("age"); // 'removeItem 'ile veri silinebilir 'clear' ile tüm veriler temizlenebilir.

// let user = {
//   name: "Yasin",
//   age: 28,
// };

// localStorage.setItem("user", JSON.stringify(user))
// // localStorage.setItem("user", JSON.parse(user))

// let user2 = localStorage.getItem("user")

// let yasin = JSON.parse(user2)
// console.log(yasin);

// localStorage.setItem("user", JSON.stringify(user));

///////// JSON.stringify(user)  ////////////////////////
// localStorage yalnızca string türünde verileri saklayabilir.
// Ancak user bir nesne olduğu için, bunu önce bir string'e dönüştürmek gerekir. Bu amaçla JSON.stringify() kullanılır.

// Çıktı: '{"name":"Yasin","age":28}' (String formatında JSON)


// //! JSON.parse() ve JSON.stringify()

// //* JSON.stringify() JavaScript nesnesini JSON formatına dönüştürür. Bu yöntem ile JSON verilerini farklı şekillerde işlemek ve veri tabanında tutmak için kullanılabilir.

// //* JSON.parse() JSON formatındaki bir string'i JavaScript nesnesine dönüştürmek için kullanılır.

// //* Özetle, JSON.parse() JSON formatındaki veriyi alır ve onu JavaScript nesnesine çevirir. JSON.stringify() yöntemi ise JavaScript kodunu JSON dosyasına dönüştürür


// /* Örnek */

// //? Aşağıda ki örnek üzerinden JavaScript nesnesini JSON.stringify() yöntemiyle 'localStorage' a kayıt edilebilecek JSON formatına dönüştürüyoruz.

// let yetenek = [
//     {   
//         title: "HTML",
//         level: 6,
//     },
//     {
//         title: "CSS",
//         level: 9,
//     },
//     {
//         title: "JS",
//         level: 10,
//     },
//     {
//         title: "React",
//         level: 3,
//     }
// ];

// let yetenekJSON = JSON.stringify(yetenek)
// localStorage.setItem("Yetenek",yetenekJSON)

// let storedYetenek = localStorage.getItem("Yetenek")

// let parseYetenek = JSON.parse(storedYetenek)

// console.log(parseYetenek[2].title);

// let yetenekJSON = JSON.stringify(yetenek)    // JavaScript kodlarını JSON verisine dönüştürüyoruz.
// localStorage.setItem('yetenek', yetenekJSON) // 'yetenek' anahtarını kullanarak localStora'a kaydediyoruz.

// //? JSON olarak kaydedilen verileri JavaScript nesnesine çevirmek için aşağıda örnek kodlar yer almaktadır.


// let storedYetenek = localStorage.getItem('yetenek'); // 'yetenek' anahtarıyla kaydedilen JSON verisini localStorage'dan çekiyoruz
// let parsedYetenek = JSON.parse(storedYetenek); // '' JSON verisini javaScript  kodlarına çeviriyoruz.

// console.log(parsedYetenek[0].title); // "HTML"   
// console.log(parsedYetenek[0].level); // 6




// localStorage.setItem("bakiye","20")   // Bakiye keyimize 20 Value tanımladık.

// let bakiye = parseInt(localStorage.getItem("bakiye"))  // Bakiye'yi İNTEGER bir değere çevirdik (ParseINT)

// let ekle = bakiye += 20

// console.log(bakiye);

// localStorage.setItem("bakiye",ekle.toString()) // eklenilen halinde tekrardan STRİNGe çevirip locale kaydettik (toString())




// localStorage.setItem("Bakiye", "20"); // İlk bakiye "20" olarak ayarlanır

// // Mevcut bakiyeyi al ve sayıya çevir
// let bakiye = parseInt(localStorage.getItem("Bakiye"));

// // 10 ekle
// let ekle = bakiye + 10;

// // Yeni değeri sakla
// localStorage.setItem("Bakiye", ekle.toString());

// console.log(localStorage.getItem("Bakiye")); // Çıktı: "30"





// /* Örnek */

// let users = [
//     {
//       id: 1,
//       name: "Yasin Özdemir",
//       age: 28,
//       email: "test.Yasin.ozdemir@gmail.com"
//     },
//     {
//       id: 2,
//       name: "Mehmet Çoban",
//       age: 24,
//       email: "test.mehmet.coban@gmail.com"
//     },
//   ];


//     // localStorage'a kaydetme
//     localStorage.setItem("users", JSON.stringify (users));
//     console.log("Veri localStorage'a kaydedildi.");
  
//     // localStorage'dan alınan veriyi JavaScript kodlarına dönüştürme
//     let storedUsers = JSON.parse(localStorage.getItem("users"));
  
//     // JSON verisini objeye dönüştürme
//     console.log(storedUsers);
//     console.log(storedUsers[0].name); // Yasin Özdemir





// ### **1. `localStorage`'e Değer Kaydetme**
// Aşağıdaki kod ne yapar?


// localStorage.setItem("isim", "Ali");
// ```

// #### A) `"isim"` anahtarındaki veriyi alır.  +İbrahim,Ege,Alihan
// #### B) `"isim"` anahtarına `"Ali"` değerini kaydeder.  +Gökhan,Esma
// #### C) `"Ali"` değerini siler.  
// #### D) `"isim"` anahtarındaki veriyi günceller.  

// ---

// ### **2. `localStorage`'den Veri Okuma**
// Aşağıdaki kodun çıktısı ne olur?


// localStorage.setItem("yas", "25");
// let yas = localStorage.getItem("yas");
// console.log(yas);
// ```

// #### A) `undefined`  
// #### B) `null`  +İbrahim,Alihan
// #### C) `"25"`  +Esma,Ege
// #### D) `25`  +Gökhan

// ---

// ### **3. Değer Silme**
// Aşağıdaki kod ne yapar?


// localStorage.setItem("meslek", "Mühendis");
// localStorage.removeItem("meslek");
// ```

// #### A) `"meslek"` anahtarındaki veriyi alır.  +Gökhan,İbrahim,Esma,Ege,Alihan
// #### B) `"meslek"` anahtarını ve değerini siler.  
// #### C) `"meslek"` anahtarına `"null"` atar.  
// #### D) Hata verir.  

// ---

// ### **4. Sayısal Değerlerle İşlem**
// Aşağıdaki kodun çıktısı ne olur?


// localStorage.setItem("puan", "30");
// let puan = localStorage.getItem("puan");
// puan += 10;
// console.log(puan);
// ```

// #### A) `40`  +İbrahim,Esma
// #### B) `"3010"`  +Gökhan,Ege,Alihan
// #### C) `10`  
// #### D) `NaN`  

// ---



// ### **Cevaplar**
// 1. B) `"isim"` anahtarına `"Ali"` değerini kaydeder.  
// 2. C) `"25"`  
// 3. B) `"meslek"` anahtarını ve değerini siler.  
// 4. B) `"3010"` (string birleştirme)  
  
