// Import the Express library
import express from "express";
import { promises as fs } from "fs";

// Create an instance of the Express app
const app = express();

const __dirname =
  "C:\\Users\\gwion\\Desktop\\EAAA\\3. Semester\\DMU-22v---Distribueret-programmering-2023-Jan-29_19-48-07-210\\viewer\\files\\Session 14\\Eksempler\\Node.js og Express";

function genererLinks(filnavne) {
  let html = "";
  for (let filnavn of filnavne) {
    html += '<a href="' + filnavn + '">' + filnavn + "</a><br>\n";
  }
  return html;
}

app.use(express.static(__dirname + "/filer"));
// Define a route
app.get("/", async (req, res) => {
  if (req.url === "/") {
    let filnavne = await fs.readdir(__dirname + "/filer");
    let html = genererLinks(filnavne);
    res.writeHead(200, { "Content-Type": "text/html" }); // OK
    res.write(html);
  } else {
    try {
      let sti = __dirname + "/filer" + req.url;
      let filData = await fs.readFile(sti);
      res.writeHead(200); // OK
      res.write(filData);
    } catch (e) {
      res.writeHead(404); // Not Found
      res.write(e.name + ": " + e.message);
    }
  }
  res.end();
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
