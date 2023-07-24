/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      username: "lociper1",
      password: "123456",
      email: "lociper1@mail.com",
      firstName: "Lociper1",
      lastName: "Lociper1",
      gender: "Erkek",
      birthday: "01.01.2023",
    },
    {
      id: 2,
      username: "lociper2",
      password: "123456",
      email: "lociper2@mail.com",
      firstName: "Lociper2",
      lastName: "Lociper2",
      gender: "Kız",
      birthday: "01.01.2023",
    },
  ]);
  await knex("seferler").del();
  await knex("seferler").insert([
    {
      id: 1,
      seferSirketResim:
        "https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/partner/3195-sm.png",
      seferSirketi: "KamilKoç",
      seferTarihi: "26/7/2023",
      seferSuresi: "5 Saat ",
      seferSaati: "12:00",
      seferUcreti: "500",
      seferKapasitesi: "50",
      seferKoltukDüzeni: "2+2",
      seferKalkisYeri: "İstanbul",
      seferVarisYeri: "Ankara",
      seferAciklama: "İstanbul Ankara arası seferlerimiz başlamıştır...",
    },
    {
      id: 2,
      seferSirketResim:
        "https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/partner/3421-sm.png",
      seferSirketi: "Pamukkale",
      seferTarihi: "26/7/2023",
      seferSuresi: "6 Saat",
      seferSaati: "10:00",
      seferUcreti: "400",
      seferKapasitesi: "50",
      seferKoltukDüzeni: "2+2",
      seferKalkisYeri: "Ankara",
      seferVarisYeri: "İstanbul",
      seferAciklama: "Ankara İstanbul arası seferlerimiz başlamıştır..",
    },
    {
      id: 3,
      seferSirketResim:
        "https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/partner/3195-sm.png",
      seferSirketi: "KamilKoç",
      seferTarihi: "26/7/2023",
      seferSuresi: "3 Saat",
      seferSaati: "11:00",
      seferUcreti: "250",
      seferKapasitesi: "50",
      seferKoltukDüzeni: "2+2",
      seferKalkisYeri: "Ankara",
      seferVarisYeri: "İstanbul",
      seferAciklama: "Ankara İstanbul arası seferlerimiz başlamıştır..",
    },
  ]);

  await knex("koltuklar").del();
  await knex("koltuklar").insert([
    {
      seferId: 1,
      koltukNo: 1,
      UserId: 1,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },
    {
      seferId: 1,
      koltukNo: 2,
      UserId: 2,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },
    {
      seferId: 1,
      koltukNo: 3,
      UserId: 3,
      cinsiyet: "Kadın",
      koltukFiyati: 500,
    },
    {
      seferId: 1,
      koltukNo: 4,
      UserId: 1,
      cinsiyet: "Kadın",
      koltukFiyati: 500,
    },
    {
      seferId: 1,
      koltukNo: 5,
      UserId: 2,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },
    {
      seferId: 1,
      koltukNo: 6,
      UserId: 3,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },
    {
      seferId: 1,
      koltukNo: 7,
      UserId: 1,
      cinsiyet: "Kadın",
      koltukFiyati: 500,
    },
    {
      seferId: 1,
      koltukNo: 8,
      UserId: 2,
      cinsiyet: "Kadın",
      koltukFiyati: 500,
    },
    {
      seferId: 1,
      koltukNo: 9,
      UserId: 3,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },
    {
      seferId: 1,
      koltukNo: 10,
      UserId: 1,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },

    // Sefer 2 için koltuklar
    {
      seferId: 2,
      koltukNo: 1,
      UserId: 1,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },
    {
      seferId: 2,
      koltukNo: 2,
      UserId: 2,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },
    {
      seferId: 2,
      koltukNo: 3,
      UserId: 3,
      cinsiyet: "Kadın",
      koltukFiyati: 500,
    },
    {
      seferId: 2,
      koltukNo: 4,
      UserId: 1,
      cinsiyet: "Kadın",
      koltukFiyati: 500,
    },
    {
      seferId: 2,
      koltukNo: 5,
      UserId: 2,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },
    {
      seferId: 2,
      koltukNo: 6,
      UserId: 3,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },
    {
      seferId: 2,
      koltukNo: 7,
      UserId: 1,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },
    {
      seferId: 2,
      koltukNo: 8,
      UserId: 2,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },
    {
      seferId: 2,
      koltukNo: 9,
      UserId: 3,
      cinsiyet: "Kadın",
      koltukFiyati: 500,
    },
    {
      seferId: 2,
      koltukNo: 10,
      UserId: 1,
      cinsiyet: "Kadın",
      koltukFiyati: 500,
    },

    // Sefer 3 için koltuklar
    {
      seferId: 3,
      koltukNo: 1,
      UserId: 1,
      cinsiyet: "Kadın",
      koltukFiyati: 500,
    },
    {
      seferId: 3,
      koltukNo: 2,
      UserId: 2,
      cinsiyet: "Kadın",
      koltukFiyati: 500,
    },
    {
      seferId: 3,
      koltukNo: 3,
      UserId: 3,
      cinsiyet: "Kadın",
      koltukFiyati: 500,
    },
    {
      seferId: 3,
      koltukNo: 4,
      UserId: 2,
      cinsiyet: "Kadın",
      koltukFiyati: 500,
    },
    {
      seferId: 3,
      koltukNo: 5,
      UserId: 1,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },
    {
      seferId: 3,
      koltukNo: 6,
      UserId: 3,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },
    {
      seferId: 3,
      koltukNo: 7,
      UserId: 1,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },
    {
      seferId: 3,
      koltukNo: 8,
      UserId: 2,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },
    {
      seferId: 3,
      koltukNo: 9,
      UserId: 1,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },
    {
      seferId: 3,
      koltukNo: 10,
      UserId: 3,
      cinsiyet: "Erkek",
      koltukFiyati: 500,
    },
  ]);
};
