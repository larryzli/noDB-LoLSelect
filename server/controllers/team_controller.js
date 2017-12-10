const axios = require("axios");

let red_team = [
    {
        id: 135,
        name: "Gangplank",
        armor: 35,
        armorperlevel: 3,
        attackdamage: 64,
        attackdamageperlevel: 3,
        attackrange: 125,
        attackspeedoffset: 0,
        attackspeedperlevel: 3.2,
        crit: 0,
        critperlevel: 0,
        hp: 540,
        hpperlevel: 82,
        hpregen: 6,
        hpregenperlevel: 0.6,
        movespeed: 345,
        mp: 282,
        mpperlevel: 40,
        mpregen: 7.5,
        mpregenperlevel: 0.7,
        spellblock: 32.1,
        spellblockperlevel: 1.25,
        image_url:
            "https://pandacdn.blob.core.windows.net/cdn/images/lol/champion/image/135/Gangplank.png",
        big_image_url:
            "https://pandacdn.blob.core.windows.net/cdn/images/lol/champion/big_image/135/Gangplank_0.jpg"
    },
    {
        id: 134,
        name: "Miss Fortune",
        armor: 33,
        armorperlevel: 3,
        attackdamage: 54,
        attackdamageperlevel: 1,
        attackrange: 550,
        attackspeedoffset: -0.0473,
        attackspeedperlevel: 3,
        crit: 0,
        critperlevel: 0,
        hp: 530,
        hpperlevel: 85,
        hpregen: 6.192,
        hpregenperlevel: 0.65,
        movespeed: 325,
        mp: 325.84,
        mpperlevel: 35,
        mpregen: 8.042,
        mpregenperlevel: 0.65,
        spellblock: 30,
        spellblockperlevel: 0.5,
        image_url:
            "https://pandacdn.blob.core.windows.net/cdn/images/lol/champion/image/134/MissFortune.png",
        big_image_url:
            "https://pandacdn.blob.core.windows.net/cdn/images/lol/champion/big_image/134/MissFortune_0.jpg"
    }
];
let red_name = "Red Team";

let blue_team = [
    {
        id: 137,
        name: "Tahm Kench",
        armor: 47,
        armorperlevel: 3.5,
        attackdamage: 56,
        attackdamageperlevel: 3.2,
        attackrange: 175,
        attackspeedoffset: 0,
        attackspeedperlevel: 2.5,
        crit: 0,
        critperlevel: 0,
        hp: 610,
        hpperlevel: 95,
        hpregen: 6.5,
        hpregenperlevel: 0.55,
        movespeed: 335,
        mp: 325,
        mpperlevel: 40,
        mpregen: 8,
        mpregenperlevel: 1,
        spellblock: 32.1,
        spellblockperlevel: 1.25,
        image_url:
            "https://pandacdn.blob.core.windows.net/cdn/images/lol/champion/image/137/TahmKench.png",
        big_image_url:
            "https://pandacdn.blob.core.windows.net/cdn/images/lol/champion/big_image/137/TahmKench_0.jpg"
    },
    {
        id: 136,
        name: "Vel'Koz",
        armor: 21.88,
        armorperlevel: 3.5,
        attackdamage: 54.9379,
        attackdamageperlevel: 3.1416,
        attackrange: 525,
        attackspeedoffset: 0,
        attackspeedperlevel: 1.36,
        crit: 0,
        critperlevel: 0,
        hp: 520,
        hpperlevel: 88,
        hpregen: 5.424,
        hpregenperlevel: 0.55,
        movespeed: 340,
        mp: 375.6,
        mpperlevel: 42,
        mpregen: 6,
        mpregenperlevel: 0.8,
        spellblock: 30,
        spellblockperlevel: 0.5,
        image_url:
            "https://pandacdn.blob.core.windows.net/cdn/images/lol/champion/image/136/Velkoz.png",
        big_image_url:
            "https://pandacdn.blob.core.windows.net/cdn/images/lol/champion/big_image/136/Velkoz_0.jpg"
    }
];
let blue_name = "Blue Team";

const getRedName = (req, res, next) => {
    return res.status(200).json(red_name);
};

const getBlueName = (req, res, next) => {
    return res.status(200).json(blue_name);
};

const updateRedName = (req, res, next) => {
    red_name = req.body;
    return res.status(200).json(red_name);
};

const updateBlueName = (req, res, next) => {
    blue_name = req.body;
    return res.status(200).json(blue_name);
};

const getRedTeam = (req, res, next) => {
    return res.status(200).json(red_team);
};

const getBlueTeam = (req, res, next) => {
    return res.status(200).json(blue_team);
};

const addRedMember = (req, res, next) => {
    red_team.push(req.body);
    return res.status(200).json(red_team);
};

const addBlueMember = (req, res, next) => {
    blue_team.push(req.body);
    return res.status(200).json(blue_team);
};

const removeRedMember = (req, res, next) => {
    const memberID = req.params.id;
    const index = red_team.findIndex(member => member.id === memberID);

    red_team.splice(index, 1);
    return res.status(200).json(red_team);
};

const removeBlueMember = (req, res, next) => {
    const memberID = req.params.id;
    const index = blue_team.findIndex(member => member.id === memberID);

    blue_team.splice(index, 1);
    return res.status(200).json(blue_team);
};

module.exports = {
    getRedName,
    getBlueName,
    updateRedName,
    updateBlueName,
    getRedTeam,
    getBlueTeam,
    addRedMember,
    addBlueMember,
    removeRedMember,
    removeBlueMember
};
