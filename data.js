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
    {name: "Alice Chessman", element: "Norm", img: ["alice-whims-monarch-ptm"]},
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
    {name: "Vanitas", element: "Wind", img: ["vanitas-dominus-rex-alc-alter"]}
]
const championsno3 = [
    {name: "Alice Chessman", element: "Norm", img: ["alice-whims-monarch-ptm"]},
    {name: "Alice Anomaly", element: "Umbra", img: ["alice-phantom-monarch-ptm"]},
    {name: "Allen", element: "Norm", img: ["allen-beast-beckoner-doa1e"]},
    {name: "Polkhawk", element: "Fire", img: ["polkhawk-bombastic-shot-alc"]},
    {name: "Nico", element: "Water", img: ["nico-whiplash-allure-alc"]},
    {name: "Mordred", element: "Norm", img: ["mordred-flawless-blade-doa1e"]}
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
    {count: "0-10", num: 1},
    {count: "10-20", num: 1},
    {count: "20-30", num: 2},
    {count: "30-40", num: 2},
    {count: "40-50", num: 3},
    {count: "50-60", num: 4}
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