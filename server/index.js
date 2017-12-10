const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const cs = require("./controllers/champions_controller.js");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/api/champions/", cs.getAllChamps);

const port = 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
