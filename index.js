const express = require('express');
const app = express();
const PORT = 3000;
const api = require("./api")
const cors = require("cors")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use("/api", api)

app.listen(PORT, () => {
  console.log(`Hello from imagene health in port ` + PORT)
})