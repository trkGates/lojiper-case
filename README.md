![Screenshot_8](https://github.com/yusuf-colak/lojiper-case/assets/128047955/895b38f2-df9a-4a2e-96c7-dbd7a5d85e94)
![Screenshot_7](https://github.com/yusuf-colak/lojiper-case/assets/128047955/95313430-bff4-4050-9410-0bc05ed6f327)
![Screenshot_6](https://github.com/yusuf-colak/lojiper-case/assets/128047955/06cf114c-1826-432a-9c9a-6eb951c280cd)
Belli temel özelliklerin bulunduğu bir otobüs bilet satış uygulaması yaptım.

Login
   ·Kullanıcı adı ve şifre ile giriş yapılabilen sayfa
   ·Bilgiler doğru ise anasayfaya yönlendirme
   ·Bilgiler yanlış ise hata mesajı
   ·İlk defa giriş yapan kullanıcılar için kayıt ol sayfasına yönlendirme

![Login](https://github.com/yusuf-colak/lojiper-case/assets/128047955/9ebbaf1f-c4a3-4d6d-9752-08f2c9160086)

Kayıt Ol
   ·E-posta, şifre, ad, soyad, cinsiyet, doğum tarihi gibi bilgiler girilecek
   ·Başarılı kayıt olma durumunda login sayfasına yönlendirme
   
![Register](https://github.com/yusuf-colak/lojiper-case/assets/128047955/9c481da2-60ca-4ba9-85c9-813516f810b4)


Anasayfa
   ·Kullanıcı bu sayfada sefer ile ilgili bilgiler girecektir.
   ·Sayfada 3 adet girdi olacak ve hepsi zorunlu olacaktır. Herhangi biri boş ise uyarı mesajı
    verilecektir. Bu girdiler;
        ·Kalkış yeri - Select Box olması beklenmektedir.
        ·Varış yeri - Select Box olması beklenmektedir.
        ·Tarih - Datepicker olması beklenmektedir.
        ·Ara butonu ile seferler listelenecektir.
Sorgu Sonuçları
   ·Anasayfada girilen bilgilere göre seferler listelenecektir.
   ·Seferlerin hangi şehirden hangi şehre hangi tarihte olduğu, kaç koltuk boş olduğu ve fiyatı ne kadar olduğuna dair bilgiler olacaktır.
   ·Kullanıcının girdiği bilgilere uygun sefer yok ise hata vermeden, uygun sefer olmadığına dair uyarı verilecektir.
   ·Listelenen seferlerden birine tıklandığında bilet satış paneli açılacaktır.
![Home1](https://github.com/yusuf-colak/lojiper-case/assets/128047955/83089344-20e2-4b06-995e-16345d1c2543)

Bilet Satış
   ·Sefer detayları ve fiyatı gösterilecektir.
   ·Bu sayfada koltuk seçimi yapılacaktır.
        ·Otobüs düzeni 2 sıra çift koltuk şeklinde olacaktır.
        ·Koltuklar dolu veya boş olabilir, dolu koltuklarda kişinin cinsyeti ikon veya renk ile belirtilecektir.
        ·En fazla 5 koltuk seçilebilir, 6. koltuk seçimi yapılmak istendiğinde toast message gibi uyarı verilecektir.
        ·Yan yana iki koltuk birlikte alınmıyor ise, karşı cinsin yanına oturulamaz. Cinsiyet bilgisi kayıt olurken kullanıcıdan alınmıştır.
        ·Kullanıcı koltuk seçimlerini yaptıkça ücret alanı güncellenecek ve gösterilecektir. Aynı şekilde iptal ettiğinde de ücret alanının güncellenmesi beklenir.
   ·Devam butonu ile ödeme sayfasına yönlendirme yapılacaktır.

![Home2](https://github.com/yusuf-colak/lojiper-case/assets/128047955/aff1b331-7cdc-40f0-963f-32c77d325d03)
![Home3](https://github.com/yusuf-colak/lojiper-case/assets/128047955/f72755c0-bdb6-45bf-ba70-c9cf8eeb3562)
![Home4](https://github.com/yusuf-colak/lojiper-case/assets/128047955/eed6d552-ce50-4d9e-98f2-4e5cfd768935)
![Home5](https://github.com/yusuf-colak/lojiper-case/assets/128047955/1b990b7d-d14d-4a23-9adb-d54a7b7994dd)
![Home6](https://github.com/yusuf-colak/lojiper-case/assets/128047955/d0274b5d-ccb8-44d2-a66c-1ffe5e580cc3)

Ödeme
   ·Bu sayfada bir ödeme formu olacak ve kullanıcı bu formu doldurup onayladığında 1 saniye civarı bekleten bir spinner olacaktır.
   ·Ödeme başarılı ise anasayfaya dönüş butonu ve ödeme başarılı mesajı belirecektir.

![Buyy](https://github.com/yusuf-colak/lojiper-case/assets/128047955/4508a645-75c0-431c-a441-3737cfb589d5)
![Ticket](https://github.com/yusuf-colak/lojiper-case/assets/128047955/93ff48d6-85db-43bf-aa85-5e238152dd6e)
