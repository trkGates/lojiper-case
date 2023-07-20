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
      Adi: "Lociper1",
      Soyadi: "Lociper1",
      Cinsiyet: "Erkek",
      DogumTarihi: "01.01.2023",
    },
    {
      id: 2,
      username: "lociper2",
      password: "123456",
      email: "lociper2@mail.com",
      Adi: "Lociper2",
      Soyadi: "Lociper2",
      Cinsiyet: "Kız",
      DogumTarihi: "01.01.2023",
    },
  ]);
};
