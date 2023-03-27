import express from "express";

const app = express();

const users = [
  {
    name: "Gwion",
    age: 22,
    email: "Bruh@bruh.bruh",
  },
  {
    name: "Billy Nigga",
    age: 21,
    email: "ONGOD@FRFR.NOCAP",
  },
  {
    name: "CHRISTIANO",
    age: 69,
    email: "BRUHMOMENT@FRFR.CAP",
  },
];

let data = { useres: users };

app.set("view engine", "pug");
app.set("views", "viewer\\files\\Session 15\\Opgaver");

app.get("/", (req, res) => {
  res.render("opgave15.2.pug", data);
});

app.listen(8080, () => {
  console.log("Server is running...");
});
