import express from "express";

const app = express();

async function get(url) {
  const respons = await fetch(url);
  if (respons.status !== 200)
    // OK
    throw new Error(respons.status);
  return respons.json();
}

const usersURL = "https://randomuser.me/api/?nat=dk&results=100";

app.set("view engine", "pug");
app.set("views", "viewer\\files\\Session 15\\Opgaver");

function getUserDataToList() {
  get(usersURL).then((response) => {
    const users = response;
    let data = { users: users };
    console.log(data);
    app.get("/", (req, res) => {
      res.render("opgave15.3.pug", data);
    });
  });
}

getUserDataToList();

app.listen(8080, () => {
  console.log("Server is running...");
});
