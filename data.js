const basicelements = [
    "Fire",
    "Wind",
    "Water",
    "Purity"
]
const spirits = [
    {spirit: "Spirit", spiritcard: "Spirit of ", img: "spirit-of-", set: "doa1e",},
    {spirit: "Fragmented", spiritcard: "Fragmented Spirit of ", img: "fragmented-spirit-of-", set: "mrc"},
    {spirit: "Serene", spiritcard: "Spirit of Serene", img: "spirit-of-serene-", set: "ftc"},
    {spirit: "Fortuitous", spiritcard: "Spirit of Fortuitous", img: "spirit-of-fortuitous-", set: "hvn"}
]
const levelcap = [
    "Level 3",
    "No Level 3"
]
const champions = [
    {name: "Diao Chan", element: "Tera", img: ["diao-chan-dreaming-wish-hvn"]},
    {name: "Arisanna", element: "Astra", img: ["arisanna-master-alchemist-alc"]},
    {name: "Lorraine", element: "Crux", img: ["lorraine-blademaster-doa1e"]},
    {name: "Tristan", element: "Umbra", img: ["tristan-hired-blade-mrc", "tristan-grim-stalker-doa1e"]},
    {name: "Jin", element: "Exia", img: ["jin-zealous-maverick-amb"]},
    {name: "Alice Chessman", element: "Norm", img: ["alice-golden-queen-dtr"]},
    {name: "Alice Anomaly", element: "Umbra", img: ["alice-phantom-monarch-ptm"]},
    {name: "Merlin Mage", element: "Crux", img: ["merlin-memory-thief-doa1e"]},
    {name: "Silvie", element: "Tera", img: ["silvie-with-the-pack-doa1e"]},
    {name: "Zander", element: "Luxem", img: ["zander-always-watching-doa1e"]},
    {name: "Guo Jia", element: "Luxem", img: ["guo-jia-blessed-scion-hvn"]},
    {name: "Rai", element: "Arcane", img: ["rai-archmage-doa1e"]},
    {name: "Kongming", element: "Tera", img: ["kongming-erudite-strategist-hvn", "kongming-ascetic-vice-amb"]},
    {name: "Diana ALC", element: "Umbra", img: ["diana-deadly-duelist-alc"]},
    {name: "Diana DTR", element: "Astra", img: ["diana-judgments-arrow-dtr"]},
    {name: "Tonoris", element: "Neos", img: ["tonoris-might-of-humanity-alc"]},
    {name: "Allen", element: "Norm", img: ["allen-beast-beckoner-doa1e"]},
    {name: "Polkhawk", element: "Fire", img: ["polkhawk-bombastic-shot-alc"]},
    {name: "Nico", element: "Water", img: ["nico-whiplash-allure-alc"]},
    {name: "Mordred", element: "Norm", img: ["mordred-flawless-blade-doa1e"]},
    {name: "Vanitas", element: "Wind", img: ["vanitas-convergent-ruin-alc"]},
    {name: "Merlin Assassin", element: "Crux", img: ["merlin-amethysts-glow-ptm"]}
]
const championsyes3 = [
    {name: "Diao Chan", element: "Tera", img: ["diao-chan-idyll-corsage-hvn"]},
    {name: "Arisanna", element: "Astra", img: ["arisanna-astral-zenith-alc", "arisanna-lucent-arbiter-alc"]},
    {name: "Lorraine", element: "Crux", img: ["lorraine-crux-knight-doap", "lorraine-spirit-ruler-doa1e"]},
    {name: "Tristan", element: "Umbra", img: ["tristan-shadowdancer-rec-shd", "tristan-shadowreaver-mrc"]},
    {name: "Jin", element: "Exia", img: ["jin-undying-resolve-amb"]},
    {name: "Alice Chessman", element: "Norm", img: ["dmiigIubVp"]},
    {name: "Alice Anomaly", element: "Umbra", img: ["alice-phantom-monarch-ptm"]},
    {name: "Merlin Mage", element: "Crux", img: ["merlin-kingslayer-ftc"]},
    {name: "Silvie", element: "Tera", img: ["silvie-slime-sovereign-rec-slm", "silvie-loved-by-all-doap", "silvie-earths-tune-doa1e"]},
    {name: "Zander", element: "Luxem", img: ["zander-corhazis-chosen-doa1e", "zander-blinding-steel-doap"]},
    {name: "Guo Jia", element: "Luxem", img: ["guo-jia-heavens-favored-hvn"]},
    {name: "Rai", element: "Arcane", img: ["rai-storm-seer-doap", "rai-mana-weaver-doa1e"]},
    {name: "Kongming", element: "Tera", img: ["kongming-fel-eidolon-amb"]},
    {name: "Diana ALC", element: "Umbra", img: ["diana-cursebreaker-alc", "diana-duskstalker-alc"]},
    {name: "Diana DTR", element: "Astra", img: ["diana-moonpiercer-dtr"]},
    {name: "Tonoris", element: "Neos", img: ["tonoris-creations-will-alc", "tonoris-genesis-aegis-alc"]},
    {name: "Merlin Assassin", element: "Crux", img: ["merlin-brilliant-vestige-ptm"]},
    {name: "Vanitas", element: "Wind", img: ["vanitas-dominus-rex-alc-alter"]},
    {name: "Mordred", element: "Luxem", img: ["JDDkfl89HP", "8xzu4Ooj7v"]}
]
const championsno3 = [
    {name: "Allen", element: "Norm", img: ["allen-beast-beckoner-doa1e"]},
    {name: "Polkhawk", element: "Fire", img: ["polkhawk-bombastic-shot-alc"]},
    {name: "Nico", element: "Water", img: ["nico-whiplash-allure-alc"]}
]
const relics = [
    {name: "Quicksilver Grail", img: "quicksilver-grail-ftc"},
    {name: "Art of War", img: "art-of-war-hvn1e"},
    {name: "Mercurial Heart", img: "mercurial-heart-mrc"},
    {name: "Imperial Seal", img: "imperial-seal-amb"},
    {name: "The Looking Glass", img: "the-looking-glass-dtr1e"},
    {name: "Temporal Spectrometer", img: "temporal-spectrometer-alc"},
    {name: "Grand Crusaders Ring", img: "grand-crusaders-ring-doa1e"},
    {name: "Lost Providence", img: "lost-providence-ptm1e"}
]
const amount = [
    {count: "0-10", num: 0},
    {count: "10-20", num: 1},
    {count: "20-30", num: 2},
    {count: "30-40", num: 3},
    {count: "40-50", num: 4},
    {count: "50-60", num: 5}
]

function mulberry32(count) {
    const date = new Date();
    let seed =  date.getFullYear() + "" + date.getMonth() + date.getDate();
	let value = seed;
	let z = (seed += 0x6D2B79F5);
	z = Math.imul(z ^ (z >>> 15), z | 1);
	z ^= z + Math.imul(z ^ (z >>> 7), z | 61);
	value = ((z ^ (z >>> 14)) >>> 0) / 4294967296;
	
	value = Math.floor(value * count);
	//value = Math.floor(value * 2);
    return value;
  }
  function mulberry32B(count) {
    const date = new Date();
    let seed =  date.getFullYear() + "" + date.getMonth() + date.getDate();
	let value = seed;
	let z = (seed += 0x9B2B21CF);
	z = Math.imul(z ^ (z >>> 15), z | 1);
	z ^= z + Math.imul(z ^ (z >>> 7), z | 61);
	value = ((z ^ (z >>> 14)) >>> 0) / 4294967296;
	
	value = Math.floor(value * count);
	//value = Math.floor(value * 2);
    return value;
  }

const lesserboon = [
    {name: "Lesser Boon of Agni", img: "iiYDQVR98s", element: "Fire"},
    {name: "Lesser Boon of Allurement", img: "nbqrMrKAiT", element: "Norm"},
    {name: "Lesser Boon of Apollo", img: "aRVaQZXLwz", element: "Norm"},
    {name: "Lesser Boon of Artemis", img: "RzCde2mr3i", element: "Norm"},
    {name: "Lesser Boon of Astraeus", img: "HwT0ROQ5zE", element: "Wind"},
    {name: "Lesser Boon of Awilix", img: "rSI1dX8Zec", element: "Norm"},
    {name: "Lesser Boon of Bullets", img: "pDhwZ4cvLV", element: "Norm"},
    {name: "Lesser Boon of Distance", img: "5vjnLfdaTK", element: "Norm"},
    {name: "Lesser Boon of Dux", img: "NC7xDYbli2", element: "Norm"},
    {name: "Lesser Boon of Enchantment", img: "wOlumumOw9", element: "Norm"},
    {name: "Lesser Boon of Etherealys", img: "181vry2nRZ", element: "Norm"},
    {name: "Lesser Boon of Fauna", img: "9rn5L9vNp5", element: "Norm"    },
    {name: "Lesser Boon of Isis", img: "8cpjVOUkhc", element: "Norm"},
    {name: "Lesser Boon of Kanaloa", img: "SowhQvPyM1", element: "Water"},
    {name: "Lesser Boon of Knox", img: "RNzzCinF3u", element: "Norm"},
    {name: "Lesser Boon of Notus", img: "7J15Oz62I5", element: "Wind"},
    {name: "Lesser Boon of Nuwa", img: "IOSmuNvPEp", element: "Norm"},
    {name: "Lesser Boon of Odysseus", img: "olqUnUXwcv", element: "Norm"},
    {name: "Lesser Boon of Ozymandias", img: "YNRN6nAnXr", element: "Norm"},
    {name: "Lesser Boon of Poseidon", img: "tItlKZoq11", element: "Water"},
    {name: "Lesser Boon of Pulsousa", img: "JkS8kzyzWG", element: "Norm"},
    {name: "Lesser Boon of Rakko", img: "CUzH2UXT6g", element: "Norm"},
    {name: "Lesser Boon of Regret", img: "CvgrNb27jS", element: "Norm"},
    {name: "Lesser Boon of Revelry", img: "Rz4Frws6BR", element: "Norm"},
    {name: "Lesser Boon of Rosen", img: "aiETYOqvEs", element: "Norm"},
    {name: "Lesser Boon of Scriveners", img: "dPWTFkTKXg", element: "Norm"},
    {name: "Lesser Boon of Shou", img: "wuMcT2Vfrt", element: "Norm"},
    {name: "Lesser Boon of Territories", img: "UeVYsoOXIS", element: "Norm"},
    {name: "Lesser Boon of Time's Passage", img: "qoZfT8BgIK", element: "Norm"},
    {name: "Lesser Boon of Veilara", img: "o7yNaddYeM", element: "Norm"},
    {name: "Lesser Boon of Viscosity", img: "g75wP79agk", element: "Norm"},
    {name: "Lesser Boon of Vritra", img: "OStUapi1Os", element: "Fire"},
    {name: "Lesser Boon of Zerusa", img: "SPiaBLhmqo", element: "Norm"},
    {name: "Lesser Boon of Parvati", img: "WrXpr8VAbb", element: "Norm"}
]

const greaterboon = [
    {name: "Greater Boon of Astraeus", img: "xm66pkWE8x", element: "Wind"},
    {name: "Greater Boon of Detachment", img: "kfOJS0BDxX", element: "Norm"},
    {name: "Greater Boon of Dux", img: "uFu1ylFV5F", element: "Norm"},
    {name: "Greater Boon of Horses", img: "1O27AN5rFc", element: "Norm"},
    {name: "Greater Boon of Inari", img: "wim885fGZF", element: "Norm"},
    {name: "Greater Boon of Isis", img: "OAlymNVyQp", element: "Norm"},
    {name: "Greater Boon of Kanaloa", img: "0tlVV2wTu8", element: "Water"},
    {name: "Greater Boon of Underdog", img: "NbEYsXWXF3", element: "Norm"},
    {name: "Greater Boon of Vritra", img: "1tdbADSOxt", element: "Fire"},
    {name: "Greater Boon of Enki", img: "knJ3d58KIx", element: "Norm"},
    {name: "Greater Boon of Luxera", img: "OA6yfzn3Sm", element: "Norm"},
    {name: "Greater Boon of Parvati", img: "eILD7Asi8q", element: "Norm"},
    {name: "Greater Boon of Shou", img: "8hurTcQJwh", element: "Norm"},
]