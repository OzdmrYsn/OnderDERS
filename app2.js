
// //!MAP()
// //map fonksiyonu, bir dizinin her bir elemanı üzerinde belirli bir işlemi gerçekleştirir ve yeni bir dizi döndürür. 
// //Bu fonksiyon, orijinal dizinin elemanlarını değiştirmeden, her bir elemana uygulanan işleme dayanarak yeni bir dizi oluşturur.


// let sayilar = [1,2,3,4]
// const yeniSayilar = sayilar.map(value => value*2)
// console.log(yeniSayilar) //[2,4,6,8]

// let sayilar = [1,2,3,4]

// let YeniSayilar = sayilar.map(value => value*2)

// console.log(YeniSayilar);



// //*yapılan işlem diziyle etkileşime geçip kısa kodlamaya ile dizi elemenlarına etkide bulunmaktır.

// //*örnek olarak sepete eklenen ürünlerin fiyatı bir dizi içerisinde toplansın, 
// //*ve bu fiyatlara sepette 50% indirim yapıldığını var sayarsak;

// let sepet = [200,450,120,550]
// let indirilimliFiyatlar = sepet.map(value => value*0.50)
// console.log(indirilimliFiyatlar) //[100,225,60,275]    



// let AlisverisSepet = [700,90,500,12,50,150]

// let Yapilanİndirim = AlisverisSepet.map(value => value*0.30)

// console.log(Yapilanİndirim);

// //?Örnekler
// //*bir dizi içerisindeki elemanların hepsini büyük harge dönüştürüğ yeni bir dizi yaratmak
// let kelimeler = ["ahmet","mehmet","meryem","rojin"]
// let buyukKelimeler = kelimeler.map(value => value.toUpperCase())
// console.log(buyukKelimeler) //['AHMET', 'MEHMET', 'MERYEM', 'ROJIN']


// let isimler = ["ibrahim","gökhan","ege","alihan"]

// let buyukHarf = isimler.map(value => value.toUpperCase())
// console.log(isimler);
// console.log(buyukHarf);

// //$ to ₺
// let guncelDolarDegeri=26.09 //1$ = 26.09 ₺
// let turkLirası=[30,100,25,150,5]
// let dolar=turkLirası.map(value=>value*guncelDolarDegeri)
// console.log(dolar);

// let DolarFiyat = 34.94

// let Cuzdan = [50,100,20,200,5]

// let dolar = Cuzdan.map(value => value*DolarFiyat)

// console.log(dolar);




// //Dizi içindeki sayilari negatife çevirme

// let pozitifSay=[3,5,7,10,20]
// let negatifSay=pozitifSay.map(value=>-value)
// console.log(negatifSay);


// //İki diziyi birleştirerek yeni bir dizi oluşturmak

// let selam=["Merhaba","Nasılsın","İyi Günler"]
// let isimler=["Mehmet","Selçuk","Melis"]
// let birlestirme=isimler.map((isim,siralama) => `${selam[siralama]},${isim}`)
// console.log(birlestirme);


// let selam = ["Merhaba","Nasılsın","İyi Günler"]
// let isimler = ["Yasin","Gökhan","İbrahim"]

// let birleştirme = isimler.map((value,index) => `${selam[index]}, ${value}`)

// console.log(birleştirme);








// //*bir obje içerisinde belirli bir özelliği seçmek
// let kullanicilar = [
//     {
//         isim:"mehmet",
//         sifre:"123"
//     },
//     {
//         isim:"rojin",
//         sifre:"456"
//     },
//     {
//         isim:"semra",
//         sifre:"789"
//     },
// ]

// let kullaniciIsimleri = kullanicilar.map(value => value.isim)
// console.log(kullaniciIsimleri) //['mehmet', 'rojin', 'semra']

// //*dizi içerisindeki elemanların uzunluğunu bulunuz
// let meyveler = ["elma","armut","kavun","kivi"]
// let meyvelerLen = meyveler.map(value => value.length)
// console.log(meyvelerLen) //[4, 5, 5, 4]


// let meyveler = ["Armut","Elma","Kiraz","Karpuz","EjderhaMeyvesi"]
// let meyveUzunluk = meyveler.map(value => value.length)
// console.log(meyveUzunluk);
 

// // //!FİLTER()
// //*filter fonksiyonu, bir dizi üzerinde belirli bir koşulu sağlayan elemanları filtreleyerek yeni bir dizi oluşturur.

// //*çift sayıları ayrıştırıp yeni bir dizi oluşturmak

// let newNumbers = [2,4,5,6,7,8,9,11,15,57,86,13,67,99,105]
// let ciftSayilar = newNumbers.filter(value => value%2==0)
// let tekSayilar = newNumbers.filter(value => value%2!=0)
// console.log(ciftSayilar) 
// console.log(tekSayilar) 

// //Yukardaki Örneğe benzer bir örnek
// //Belli bir koşula göre sayilari filtreleyip yeni iki adet dizi oluşturuldu

// let ayristirilcakSayilar=[1,2,3,4,5,20,25,30,35,22,98]

// let ciftSayilar = ayristirilcakSayilar.filter((value) => value % 2 == 0)
// let tekSayilar = ayristirilcakSayilar.filter((value) => value % 2 !== 0)

// console.log(`Çift Sayilar : ${ciftSayilar}`)
// console.log(`Tek Sayilar : ${tekSayilar}`)

// let sayilar = [1,2,3,-1,-2,-3]
// let pozitifKontrol = sayilar.filter(value => value>0)

// console.log(pozitifKontrol);


// //*bir dizideki pozitif sayıları filtrelemek
// let numbers2 = [-3,4,5,-2,-6,10]
// let pozitifSayilar = numbers2.filter(value => value>0)
// console.log(pozitifSayilar) //4, 5, 10]     

// //*&&  ile belli bir değer aralığındaki sayıları filtrelemek.(80-100 arasındaki sayıları)

// let sayilarDizisi=[25,111,100,82,55,85,123,90,95]
// let seksenYuzFilter=sayilarDizisi.filter(value=>value>=80 && value<=100)
// console.log(seksenYuzFilter);



// let sayilar = [65,76,12,96,57,48,-65,1,11,90]

// let elliYuz = sayilar.filter(value => value>=50 && value<=100)

// console.log(elliYuz);



// //*Bir dizi string elemanları belirli bir uzunluğa sahip olanları filtreleme
// let meyveler2 = ["elma","armut","kavun","kivi","ananas","muz","çilek","avakado"]
// let meyvelerLenFilter = meyveler2.filter(value => value.length>5)
// console.log(meyvelerLenFilter) //['ananas', 'avakado']

// //*Bir dizi obje üzerinde belirli bir koşulu sağlayan objeleri filtreleme
// let ogrenciler = [
//     {
//         isim:"mehmet",
//         yas:23
//     },
//     {
//         isim:"rojin",
//         yas:20
//     },
//     {
//         isim:"semra",
//         yas:24
//     },
//     {
//         isim:"veli",
//         yas:14
//     },
//     {
//         isim:"ayşe",
//         yas:16
//     }
// ]

// let EhliyetKontrol = ogrenciler.filter(value => value.yas>18)
// console.log(EhliyetKontrol);


// let yasFiltrele = ogrenciler.filter(value => value.yas>18)
// console.log(yasFiltrele) // [{…}, {…}, {…}] => mehmet,rojin ve semra objeleri bize döner çünkü yaşları 18'den büyük

// //!FİND()
// //*find fonksiyonu, bir dizi üzerinde belirli bir koşulu sağlayan ilk elemanı bulur.

// let calisanlar = ["ahmet","mehmet","semra","rojin","meryem","ahmet","eda"]
// let ilkAhmet = calisanlar.find(value => value=="ahmet")
// console.log(ilkAhmet) //ahmet => calisanların isimleri aynıdır. ve burda find ile filtreleme yaptığımda ilk ahmeti bulmuş olurum

// //*Bir dizide belirli bir özelliğe sahip olan nesneyi bulma
// let calisanlar2 = [
//     {
//         id:1,
//         isim:"mehmet",
//         soyisim:"coban"
//     },
//     {
//         id:2,
//         isim:"rojin",
//         soyisim:"coban"
//     },
//     {
//         id:3,
//         isim:"semra",
//         soyisim:"erdogan"
//     },
//     {
//         id:4,
//         isim:"mehmet",
//         soyisim:"aras"
//     }
// ]

// let calisanFind = calisanlar2.find(value => value.isim=="mehmet")
// console.log(calisanFind) //{id: 1, isim: 'mehmet', soyisim: 'coban'} => normalde iki adet mehmet adında elemanım var, find kullanarak isimi ilk mehmet olan elemana ulaşmış oldum

// //Belli bir değerler arasındaki ilk sayiyi bulma
// let karisikSayilar=[0,-3,-15,25,8,12,55,35,5] 
// let degerlerArasiIlkSayi=karisikSayilar.find(value=>value>0 && value<10)
// console.log(degerlerArasiIlkSayi);//çıktısı [8] 



// let daginikSayi = [1,5,9,7,3,9,11,-15,7]

// let buyukdort = daginikSayi.find(value => value>4)

// console.log(buyukdort);
