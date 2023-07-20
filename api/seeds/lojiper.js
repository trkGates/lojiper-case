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
};
