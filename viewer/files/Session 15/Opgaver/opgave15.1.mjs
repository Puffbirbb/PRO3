import express from "express";
//import { promises as fs } from "fs";

const app = express();

const user = { name: "Gwion", age: 22, email: "Bruh@bruh.bruh" };

app.set("view engine", "pug");
app.set("views", "viewer\\files\\Session 15\\Opgaver");

app.get("/", (req, res) => {
  res.render("opgave15.1.pug", user);
});

app.listen(8080, () => {
  console.log("Server is running...");
});
