import express from "express";

const app = express();

const users = [
  {
    name: "Gwion",
    age: 22,
    email: "Bruh@bruh.bruh",
    nationality: "GB",
  },
  {
    name: "Billy Nigga",
    age: 21,
    email: "ONGOD@FRFR.NOCAP",
    nationality: "DK",
  },
  {
    name: "CHRISTIANO",
    age: 69,
    email: "BRUHMOMENT@FRFR.CAP",
    nationality: "DK",
  },
];

const nationalities = [
  "US",
  "CA",
  "FR",
  "DE",
  "GB",
  "IT",
  "JP",
  "KR",
  "CN",
  "AU",
  "NZ",
  "RU",
  "ES",
  "SE",
  "NO",
  "DK",
  "FI",
];

const randomNationality = () => {
  const randomIndex = Math.floor(Math.random() * nationalities.length);
  return nationalities[randomIndex];
};

for (let i = 0; i < 97; i++) {
  const user = {
    name: `User ${i + 1}`,
    age: Math.floor(Math.random() * 70) + 18, // age between 18 and 87
    email: `user${i + 1}@example.com`,
    nationality: randomNationality(),
  };
  users.push(user);
}

let data = { useres: users };

app.set("view engine", "pug");
app.set("views", "viewer\\files\\Session 15\\Opgaver");

app.get("/", (req, res) => {
  res.render("opgave15.4.pug", data);
});

app.listen(8080, () => {
  console.log("Server is running...");
});
