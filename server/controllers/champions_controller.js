const axios = require("axios");
let champions = [];

const getAllChamps = (req, res, next) => {
  const APIkey = process.env.APIKEY;
  if (champions.length == 0) {
    console.log("get all champs");
    // axios
    //   .get(`https://api.pandascore.co/lol/champions?token=${APIkey}&sort=name`)
    //   .then(result => {
    //     champions = result.data;
    //     res.status(200).json(champions);
    //   })
    //   .catch(console.log);
    axios
      .get(
        `https://api.pandascore.co/lol/champions?page=1&per_page=100&token=${APIkey}&sort=name`
      )
      .then(result => {
        champions = result.data;
        return axios.get(
          `https://api.pandascore.co/lol/champions?page=2&per_page=100&token=${APIkey}&sort=name`
        );
      })
      .then(result => {
        champions = champions.concat(result.data);
        return res.status(200).json(champions);
      })
      .catch(console.log);
  } else {
    console.log("stored champs");
    return res.status(200).json(champions);
  }
};

let red_team = [];
let red_name = "Red Team";

let blue_team = [];
let blue_name = "Blue Team";

const getRedName = (req, res, next) => {
  return res.status(200).json(red_name);
};

const getBlueName = (req, res, next) => {
  return res.status(200).json(blue_name);
};

const updateRedName = (req, res, next) => {
  red_name = req.body.name;
  return res.status(200).json(red_name);
};

const updateBlueName = (req, res, next) => {
  blue_name = req.body.name;
  return res.status(200).json(blue_name);
};

const getRedTeam = (req, res, next) => {
  return res.status(200).json(red_team);
};

const getBlueTeam = (req, res, next) => {
  return res.status(200).json(blue_team);
};

const addRedMember = (req, res, next) => {
  const index = champions.findIndex(
    champion => champion.id == req.body.champID
  );
  if (!red_team.includes(champions[index])) {
    red_team.push(champions[index]);
    return res.status(200).json(red_team);
  } else {
    return res.status(200).json(red_team);
  }
};

const addBlueMember = (req, res, next) => {
  const index = champions.findIndex(
    champion => champion.id == req.body.champID
  );
  if (!blue_team.includes(champions[index])) {
    blue_team.push(champions[index]);
    return res.status(200).json(blue_team);
  } else {
    return res.status(200).json(blue_team);
  }
};

const removeRedMember = (req, res, next) => {
  const memberID = req.params.id;
  const index = red_team.findIndex(member => member.id == memberID);

  red_team.splice(index, 1);
  return res.status(200).json(red_team);
};

const removeBlueMember = (req, res, next) => {
  const memberID = req.params.id;
  const index = blue_team.findIndex(member => member.id == memberID);

  blue_team.splice(index, 1);
  return res.status(200).json(blue_team);
};

const resetRed = (req, res, next) => {
  red_team = [];
  return res.status(200).json(red_team);
};

const resetBlue = (req, res, next) => {
  blue_team = [];
  return res.status(200).json(blue_team);
};

const resetTeamNames = (req, res, next) => {
  blue_name = "Blue Team";
  red_name = "Red Team";

  const names = { blue_name, red_name };
  return res.status(200).json(names);
};

module.exports = {
  getAllChamps,
  getRedName,
  getBlueName,
  updateRedName,
  updateBlueName,
  getRedTeam,
  getBlueTeam,
  addRedMember,
  addBlueMember,
  removeRedMember,
  removeBlueMember,
  resetRed,
  resetBlue,
  resetTeamNames
};
