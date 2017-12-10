const axios = require("axios");
const { APIkey } = require("./../config.js");
let champions = [
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
    },
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

const getAllChamps = (req, res, next) => {
    if (champions.length !== 139) {
        axios
            .get(
                `https://api.pandascore.co/lol/champions?page=1&per_page=100&token=${
                    APIkey
                }`
            )
            .then(result => {
                champions = result.data;
                return axios.get(
                    `https://api.pandascore.co/lol/champions?page=2&per_page=100&token=${
                        APIkey
                    }`
                );
            })
            .then(result => {
                champions = champions.concat(result.data);
                return res.status(200).json(champions);
            });
    } else {
        console.log("else");
        return res.status(200).json(champions);
    }
    // return res.status(200).json(champions);
};

const pickChamp = (req, res, next) => {
    const champID = req.params.id;
    const index = champions.findIndex(champ => champ.id === champID);

    const pickedChampion = champions[index];
    champions.splice(index, 1);

    return res.status(200).json(pickedChampion);
};

module.exports = {
    getAllChamps,
    pickChamp
};
