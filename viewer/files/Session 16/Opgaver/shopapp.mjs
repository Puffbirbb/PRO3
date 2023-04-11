import express from "express";
import sessions from "express-session";
import pug from "pug";
import path from "path";
import { fileURLToPath } from "url";
const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use(
  sessions({
    secret: "hemmelig",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 20 },
    resave: false,
  })
);
app.use(express.static(__dirname + "/filer"));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/login", (request, response) => {
  const { navn, password } = request.body;
  if (password === "111" && navn) {
    request.session.navn = navn;
    response.status(201).send(["login ok!"]);
  } else {
    response.sendStatus(401);
  }
});

app.get('/index', (request, response) => {
  const navn = request.session.navn;
  if (navn != null) {
      let cart = request.session.cart;
      if (cart == undefined) {
        cart = [];
      }
      let data = { navn : navn, shopItems: shopItems, cart: cart };
      response.render("index", data); 
  } else {
      response.redirect('/ungrantedAccess.html');
  }
});

const shopItems = [
  { id: 1, name: "Banan", price: 10 },
  { id: 2, name: "Æble", price: 20 },
  { id: 3, name: "Pære", price: 30 },
  { id: 4, name: "Kiwi", price: 40 },
  { id: 5, name: "Ananas", price: 50 },
];

app.post("/tilfoej", (request, response) => {
  const { id } = request.body;
  let cart = request.session.cart;
  if (cart == undefined) {
    cart = [];
  }
  cart.push(id);
  request.session.cart = cart;
  response.status(201).send(["added"]);
});

app.get("/logout", (request, response) => {
  request.session.destroy((err) => {  
    if (err) {
      console.log(err);
    } else {
      response.redirect("/");
    }
  });
});

app.listen(4206);

console.log("Lytter på port 4206 ...");