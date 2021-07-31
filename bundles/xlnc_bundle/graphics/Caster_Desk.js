const LCasterRep = nodecg.Replicant('leftCaster');
const RCasterRep = nodecg.Replicant('rightCaster');

const LCaster = document.getElementById('leftCaster');
const RCaster = document.getElementById('rightCaster');

const team1Rep = nodecg.Replicant('team1');
const team2Rep = nodecg.Replicant('team2');

const team1El = document.getElementById('team1');
const team2El = document.getElementById('team2');

const team1Name = document.getElementById('team1Name');
const team2Name = document.getElementById('team2Name');

nodecg.listenFor('updateCasters', (data) => {
    LCaster.innerHTML = data.leftCaster
    RCaster.innerHTML = data.rightCaster
})

nodecg.listenFor('swapCasters', (data) => {
    RCaster.innerHTML = data.leftCaster
    LCaster.innerHTML = data.rightCaster
})

team1Rep.on('change', (newVal) => {
    team1El.innerHTML = newVal;
})

team2Rep.on('change', (newVal) => {
    team2El.innerHTML = newVal;
})

nodecg.listenFor('updateTeams', (data) => {
    team1Name.innerHTML = data.team1Name
    team2Name.innerHTML = data.team2Name

    changeTeam1Image()
    changeTeam2Image()
})

nodecg.listenFor('swapTeams', (data) => {
    team2Name.innerHTML = data.team1Name
    team1Name.innerHTML = data.team2Name

    changeTeam1Image()
    changeTeam2Image()
})

// Team 1 Images
function changeTeam1Image() {
    var t1Image = document.getElementById('team1Image')

    // DA Valorant
    if (team1Name.innerHTML.includes("DA Valorant") || team1Name.innerHTML.includes("da valorant")) {
        t1Image.src = './teamLogos/DA Valorant.png'
    }

    // F8
    else if (team1Name.innerHTML.includes("F8") || team1Name.innerHTML.includes("f8")) {
        t1Image.src = './teamLogos/F8_white.png'
    }

    // Lotus
    else if (team1Name.innerHTML.includes("Lotus") || team1Name.innerHTML.includes("lotus")) {
        t1Image.src = './teamLogos/Lotus_white.png'
    }

    // Team Shiiish
    else if (team1Name.innerHTML.includes("Sh") || team1Name.innerHTML.includes("sh")) {
        t1Image.src = './teamLogos/Sheesh.png'
    }

    // Pepe Gang
    else if (team1Name.innerHTML.includes("Pepe") || team1Name.innerHTML.includes("pepe")) {
        t1Image.src = './teamLogos/Pepe Gang.png'
    }

    // Valkyrie
    else if (team1Name.innerHTML.includes("Valkyrie") || team1Name.innerHTML.includes("valkyrie")) {
        t1Image.src = './teamLogos/Valkyrie_white.png'
    } else {
        t1Image.src = './teamLogos/defaultLogo.png'
    }

    console.log('Team 1 image: ', t1Image.src)
}

// Team 2 Images
function changeTeam2Image() {
    var t2Image = document.getElementById('team2Image')

    // DA Valorant
    if (team2Name.innerHTML.includes("DA Valorant") || team2Name.innerHTML.includes("da valorant")) {
        t2Image.src = './teamLogos/DA Valorant.png'
    }

    // F8
    else if (team2Name.innerHTML.includes("F8") || team2Name.innerHTML.includes("f8")) {
        t2Image.src = './teamLogos/F8.png'
    }

    // Lotus
    else if (team2Name.innerHTML.includes("Lotus") || team2Name.innerHTML.includes("lotus")) {
        t2Image.src = './teamLogos/Lotus.png'
    }

    // Team Shiiish
    else if (team2Name.innerHTML.includes("Sh") || team2Name.innerHTML.includes("sh")) {
        t2Image.src = './teamLogos/Sheesh.png'
    }

    // Pepe Gang
    else if (team2Name.innerHTML.includes("Pepe") || team2Name.innerHTML.includes("pepe")) {
        t2Image.src = './teamLogos/Pepe Gang.png'
    }

    // Valkyrie
    else if (team2Name.innerHTML.includes("Valkyrie") || team2Name.innerHTML.includes("valkyrie")) {
        t2Image.src = './teamLogos/Valkyrie.png'
    } else {
        t2Image.src = './teamLogos/defaultLogo.png'
    }


    console.log('Team 2 image: ', t2Image.src)
}