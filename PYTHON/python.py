
# #!python sitesinden
# #!3.8.2 versiyonunu indiriyoruz
# #!executable versiyonu!

# # !mesaj vermek
# # print("hello world")

# # mesaj="selam python derslerine hoşgeldin!"
# # print(mesaj)

# # isim = "Yasin"

# # print("Benim ismim :" + isim)


# # isim = "yasin"
# # print("İsmim " + isim)

# # print("selamlar ben"," " ,end=isim)
# #! f ile değer çekmek
# # isim = "yasin"
# # print(f'Selam {isim}, Hoşgeldin!')``

# # isim = "Yasin"
# # print(f'selam {isim}, Nasılsın?')



# # !yorum satırları
# # yorum satırları # işareti ile verilir
# # selam burası yorum satırı
# # """3 tırnak ilede yorum satırı kullanılabilir"""


# # !format metodu
# # ?format metodu yer tutucu anlamına gelir ve değişkenleri yerlerine yerleştirir
# print("Selam benim adım {ad}".format(ad="YASİN"))

# # marka="BMW"
# # print("Benim arabamın markası : {}".format(marka))



# # marka = "Acer"
# # print("Benim bilgisayarımın markası : {} ".format(marka))

# # meslek="web dev."
# # yil=2016;
# # print("Benim mesleğim {}. Ben {} yılından beri yazılımla uğraşmaktayım".format(meslek,yil))


# # isim="yasin"
# # soyisim="ozdemir"
# # print("selamlar ben {1} ve soyadım {0}".format(isim,soyisim)) #?değişkenlerin index numaralarıyla oynayıp yerlerini değiştirirebiliriz.

# # print("{0} {1} {2} {3}".format("ben","python","öğrenmek","istiyorum"));

# # print("selam benim adım: {ad}. Soyadım : {soyad}, ve ben {yas} yaşındayım".format(ad="yasin",soyad="ozdemir",yas=23))


# #!değişken oluşturma
# #?DEĞİŞKEN OLUŞTURMA KURALLARI

# #? 1)Değişkenler sayı ile başlamaz!
# # 1sayi = 20 #!hata




# #? 2)DEĞİŞKENLER ARASINDA BOŞLUK BIRAKILMAZ
# # girilen kullanici adi = "yasin" #!hata

# #? 3) DEĞİŞKENLER İÇERESİNDE ÖZEL KARAKTER KONULMAZ
# # degisken$adi="yasin" #!hata

# #!doğru değişken oluşturma yöntemleri

# # girilenIsim="yasin"
# # print(girilenIsim)

# # girilen_yas = 23
# # print(girilen_yas)
# yasin = 50
# yasin +=2345
# print(yasin)

# # sayi = 10
# # sayi +=15

# # print(sayi)




# #!değişken atama işlemleri
# # sayi = 20 #?int
# # print(sayi)

# # isim = "yasin" #?string
# # print(isim)

# # sayi = 20
# # sayi2 = 30
# # print(sayi+sayi2)

# # sayi = 20
# # say2 = 10 + sayi
# # print(say2)

# # sayi = 20
# # sayi = sayi + 1
# # print(sayi)

# # sayi = 20
# # sayi = sayi + 10

# # sayi = 20
# # sayi = sayi - 20
# # print(sayi)

# # sayi = 5
# # sayi +=10
# # print(sayi)

# # sayi = 5
#   # sayi -= 3
# # print(sayi)

# #!ÇOKLU DEĞİŞKEN OLUŞTURMA
# # x,y,z= 5,10,15 #?python ile çoklu bir şekilde değişken oluşturabilirsiniz!

# sinav1,sinav2,sinav3 = 90,15,20
# print((sinav1+sinav2+sinav3)/3)


# # sinav1,sinav2,sinav3 = 50,70,90
# # print(sinav1,sinav2,sinav3)

# # sinav1,sinav2,sinav3 = 60,20,90
# # print((sinav1+sinav2+sinav3) / 3)




# #?alternatif olarak birden fazla değişkene aynı değeri verebiliriz
# # a=b=c=d="kırmızı"

# a=b=c=d = "kırmızı"

# print(b)

# # a=b=c=d="kırmızı"
# # print(a,b,c,d)


# #!değişkenlerde type çeşitleri
# #?int (sayısal)
# #?string (sözel)
# #?float (ondalıklı sayı)
# #?tuple (string ifadelerin toplamı) #!arrayden farklı bir yapıdır içerisindeki değerleri değiştirmeden kullanırız
# #?list (array mantığındaki yapılardır)
# #?set (obje mantığındaki yapılardır {12,"python",23,"django"} key değerleri almazlar)
# #?*Set öğeleri değiştirilemez, ancak öğeleri kaldırabilir ve yeni öğeler ekleyebilirsiniz.
# #?dict (objelerdir {"ad":"yasin","soyad":"ozdemir"})


# #?İNT
# # sayi = 20
# # print(type(sayi))

# #?STRİNG
# # metin = "selam burada metin yazıyor"
# # print(type(metin))


# #?FLOAT
# # sayi = 1.25
# # print(type(sayi))

# # ?list
# # karisikList = ["a","b",23,44,"x","y",76]
# # print(type(karisikList))

# #?listedeki elemana ulaşma
# # karisikList = ["a","b",23,44,"x","y",76]
# # print(karisikList[0])

# # karisikList = ["a","b",23,44,"x","y",76]
# # elemanAl = karisikList[0]
# # print(elemanAl)

# #?set
# # degerler = {"renkler","arabalar",23,44,55}
# # print(type(degerler))

# #?set değerleri değiştirilemez elemanlar olduğu için python
# #?elemanlara tek tek ulaşmayı garanti etmez bunun için for yapısı kullanılabilir

# # degerler = {"renkler","arabalar",23,44,55}
# # for i in degerler:
# #   print(i)
# degerler = {"renkler","gökhan","ibrahim","esma",123,124,15}
# print(degerler)

# for i in degerler:
#   print(i)


# #?dict #Objelerdir !!!!
# # calisanlar = {
# #   "isim":"yasin",
# #   "soyisim":"ozdemir",
# #   "yas":23
# # }
# # print(type(calisanlar))

# #?dict(obje) içerisindeki veriye ulaşma
# # calisanlar = {
# #   "isim":"yasin",
# #   "soyisim":"ozdemir",
# #   "yas":23
# # }

# # print(calisanlar["isim"])

# #?dict ve list yapısının iç içe kullanımı
# calisanlar = [
#   {
#     "isim":"yasin",
#     "soyisim":"ozdemir",
#     "yas":23
#   },
#   {
#     "isim":"burak",
#     "soyisim":"yalcin",
#     "yas":25
#   },
# ]
# print(calisanlar[0]["yas"])

# # print(calisanlar[1]["yas"])



# #!OPERATÖR İŞLERMLERİ
# #? +++++ (toplama)
# #? ----- (çıkartma)
# #? ***** (çarpma)
# #? ///// (bölme)
# #? %%%%% (mod alma)
# #? ** (üs alma)

# print(5%2)

# print(17%10)

# print(10%5)

# print(26%5)

# #!metinsel ve sayısal ifadelerde toplama

# # sayi1=20
# # sayi2=40
# # toplam = sayi1 + sayi2
# # print(toplam)

# sayimiz1 = 55
# sayimiz2 = 45
# toplam = sayimiz1 + sayimiz2
# print(toplam)


# # sayi1="20"
# # sayi2="40"
# # toplam = sayi1 + sayi2

# # print(toplam)
# isim="yasin"
# soyisim="ozdemir"
# toplam = isim+soyisim
# print(toplam)

# sayi1="20"
# sayi2=40
# toplam = sayi1 + sayi2
# print(toplam) #?int ve stirng bir değer toplamanamaz! typlerın aynı olması gerekmektedir

# #? üs alma 
# sayi = 10
# sayi = sayi**4
# print(sayi)

# sayi = int("56")
# sayi2 =int("15")

# topla = sayi+sayi2
# print(topla)

# #!değişkenlerde type  tipini değiştirmek
# #?int()
# # sayi = int("23")
# # sayi2 = int("24")
# # topla = sayi + sayi2
# # print(topla)

# isim = int("yasin")
# soyisim = int("ozdemir")
# topla = isim + soyisim
# print(topla) #!HATA

# sayi =  int(49.99) #?ondalıklı sayıyı tam sayıya çevirdik
# print(sayi)

# #?str()
# sayi = str(23)
# print(type(sayi))

# sayi1= str(10)
# sayi2 = str(20)
# print(sayi1+sayi2)

# #!len
# #?uzunluk kontrolü anlamına gelir (lenght)

# myList = [1,2,3,4,6,7,8,9]
# uzunluk = len(myList)
# print(uzunluk)

# # myList = [1,2,3,4,5,6,7,8,9]
# # myListLen = len(myList)
# # print(myListLen)

# mesaj = "selam ben yasin"
# print(len(mesaj))
 
# person = {
#   "ad":"yasin",
#   "soyad":"ozdemir",
#   "yas": 25,
#   "meslek":"yazilimci"
# }
# length = len(person)
# print(length)

# #!eval  
# x = "print(25)"
# eval(x)
# # eval(x) #?eval straing ifade içerisinde python kodu varsa derleyip çalıştırır
