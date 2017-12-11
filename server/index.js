const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const cc = require("./controllers/champions_controller.js");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/api/champions/", cc.getAllChamps);

app.get("/api/red_team/name/", cc.getRedName);
app.put("/api/red_team/name/", cc.updateRedName);

app.get("/api/red_team/", cc.getRedTeam);
app.post("/api/red_team/", cc.addRedMember);
app.delete("/api/red_team/:id", cc.removeRedMember);

app.get("/api/blue_team/name/", cc.getBlueName);
app.put("/api/blue_team/name/", cc.updateBlueName);

app.get("/api/blue_team/", cc.getBlueTeam);
app.post("/api/blue_team/", cc.addBlueMember);
app.delete("/api/blue_team/:id", cc.removeBlueMember);

const port = 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
