# Bilet Satış Sitesi Projesi
## Belli temel özelliklerin bulunduğu bir otobüs bilet satış uygulaması yaptım.

**Projemde kullandıgım diller:** <br/>
                                     · *`React` , `Typescript` , api için `Node.js Express` kullanılmıştır.*<br/>

*Projeyi çalıştırmak için* <br/>
         · `npm install`<br/>
         · `npm start` <br/>
                
## Login  <br/>
   · *Kullanıcı adı ve şifre ile giriş yapılabilen sayfa*<br/>
   · *Bilgiler doğru ise anasayfaya yönlendirme*<br/>
   · *Bilgiler yanlış ise hata mesajı*<br/>
   · *İlk defa giriş yapan kullanıcılar için kayıt ol sayfasına yönlendirme.* <br/>
## Login Sayfası:
![Login](https://github.com/yusuf-colak/lojiper-case/assets/128047955/9ebbaf1f-c4a3-4d6d-9752-08f2c9160086)
 <br/>  <br/>  <br/>
## Kayıt Ol  <br/>
   · *E-posta, şifre, ad, soyad, cinsiyet, doğum tarihi gibi bilgiler girilecek.* <br/>
   · *Başarılı kayıt olma durumunda login sayfasına yönlendirme.* <br/>
  ## Kayıt Sayfası:
![Register](https://github.com/yusuf-colak/lojiper-case/assets/128047955/9c481da2-60ca-4ba9-85c9-813516f810b4)
 <br/> <br/> <br/>

## Anasayfa <br/>
   ·**Kullanıcı bu sayfada sefer ile ilgili bilgiler girecektir.**  <br/>
   ·**Sayfada 3 adet girdi olacak ve hepsi zorunlu olacaktır. Herhangi biri boş ise uyarı mesajı verilecektir. Bu girdiler;**   <br/>
        · **Kalkış yeri** - *Select Box olması beklenmektedir.*   <br/>
        · **Varış yeri** - *Select Box olması beklenmektedir.*   <br/>
        · **Tarih** - *Datepicker olması beklenmektedir.*   <br/>
        · **Ara butonu** *ile seferler listelenecektir.*   <br/>
## Sorgu Sonuçları   <br/>
   · *Anasayfada girilen bilgilere göre seferler listelenecektir*.  <br/>
   · *Seferlerin hangi şehirden hangi şehre hangi tarihte olduğu, kaç koltuk boş olduğu ve fiyatı ne kadar olduğuna dair bilgiler olacaktır.*  <br/>
   · *Kullanıcının girdiği bilgilere uygun sefer yok ise hata vermeden, uygun sefer olmadığına dair uyarı verilecektir.*  <br/>
   · *Listelenen seferlerden birine tıklandığında bilet satış paneli açılacaktır.*  <br/>
  ## Anasayfa:
![Home1](https://github.com/yusuf-colak/lojiper-case/assets/128047955/83089344-20e2-4b06-995e-16345d1c2543)
 <br/> <br/> <br/>
 
## Bilet Satış <br/>
   · **Sefer detayları ve fiyatı gösterilecektir.**  <br/>
   · **Bu sayfada koltuk seçimi yapılacaktır.**  <br/>
        · *Otobüs düzeni 2 sıra çift koltuk şeklinde olacaktır.*  <br/>
        · *Koltuklar dolu veya boş olabilir, dolu koltuklarda kişinin cinsyeti ikon veya renk ile belirtilecektir.*  <br/>
        · *En fazla 5 koltuk seçilebilir, 6. koltuk seçimi yapılmak istendiğinde toast message gibi uyarı verilecektir.*  <br/>
        · *Yan yana iki koltuk birlikte alınmıyor ise, karşı cinsin yanına oturulamaz. Cinsiyet bilgisi kayıt olurken kullanıcıdan alınmıştır.*  <br/>
        · *Kullanıcı koltuk seçimlerini yaptıkça ücret alanı güncellenecek ve gösterilecektir. Aynı şekilde iptal ettiğinde de ücret alanının güncellenmesi beklenir.*  <br/>
   · **Devam butonu ile ödeme sayfasına yönlendirme yapılacaktır.**  <br/>
## Bilet Satış:
![Home2](https://github.com/yusuf-colak/lojiper-case/assets/128047955/aff1b331-7cdc-40f0-963f-32c77d325d03)  <br/>
![Home3](https://github.com/yusuf-colak/lojiper-case/assets/128047955/f72755c0-bdb6-45bf-ba70-c9cf8eeb3562)  <br/>
![Home4](https://github.com/yusuf-colak/lojiper-case/assets/128047955/eed6d552-ce50-4d9e-98f2-4e5cfd768935)  <br/>
![Home5](https://github.com/yusuf-colak/lojiper-case/assets/128047955/1b990b7d-d14d-4a23-9adb-d54a7b7994dd)  <br/>
![Home6](https://github.com/yusuf-colak/lojiper-case/assets/128047955/d0274b5d-ccb8-44d2-a66c-1ffe5e580cc3)
  <br/>  <br/>  <br/>
  ## Ödeme
   · *Bu sayfada bir ödeme formu olacak ve kullanıcı bu formu doldurup onayladığında 1 saniye civarı bekleten bir spinner olacaktır.*
   · *Ödeme başarılı ise anasayfaya dönüş butonu ve ödeme başarılı mesajı belirecektir.*
## Ödeme ve Biletlerim sayfası
![Buyy](https://github.com/yusuf-colak/lojiper-case/assets/128047955/4508a645-75c0-431c-a441-3737cfb589d5) <br/> 
![Ticket](https://github.com/yusuf-colak/lojiper-case/assets/128047955/93ff48d6-85db-43bf-aa85-5e238152dd6e)
