const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const cc = require("./controllers/champions_controller.js");
const tc = require("./controllers/team_controller.js");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/api/champions/", cc.getAllChamps);
app.delete("/api/champions/", cc.pickChamp);

app.get("/api/red_team/name/", tc.getRedName);
app.put("/api/red_team/name/", tc.updateRedName);

app.get("/api/red_team/", tc.getRedTeam);
app.post("/api/red_team/", tc.addRedMember);
app.delete("/api/red_team/:id", tc.removeRedMember);

app.get("/api/blue_team/name/", tc.getBlueName);
app.put("/api/blue_team/name/", tc.updateBlueName);

app.get("/api/blue_team/", tc.getBlueTeam);
app.post("/api/blue_team/", tc.addBlueMember);
app.delete("/api/blue_team/:id", tc.removeBlueMember);

const port = 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
