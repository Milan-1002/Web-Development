import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit', (req, res) => {
  const { street, pet } = req.body;  // destructuring

  const combined = `${street} ${pet}`;  // or any format you like
  res.send(`<h1>Band Name</h1> <br> ${combined}`);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
