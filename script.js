const players = {

"青山 周平": {
    car:1,
    handicap:"0m",
    rank:"S級S",
    time: "3.29",
    st: "0.08",
    diff: "+0.08",
    results: "①①②①③①①②③①",
    evaluation:"◎"
},

"鈴木 圭一郎": {
    car:2,
　　 handicap:"0m",
    rank: "S級S",
    time: "3.28",
    st: "0.07",
    diff: "+0.05",
    results: "①②①①②③①①②①",
    evaluation:"◎"
    
},

"永井 大介": {
    car:3,
    handicap:"10m",
    rank: "S級S",
    time: "3.34",
    st: "0.11",
    diff: "+0.01",
    results: "③④②①⑤②③①②④",
    evaluation:"◎"
},

"佐藤 摩弥": {
    car:4,
    handicap:"10m",
    rank: "S級S",
    time: "3.36",
    st: "0.10",
    diff: "-0.07",
    results: "⑤②③④①③②⑤④①",
    evaluation:"◎"
},

"高橋 貢": {
    car:5,
    handicap:"20m",
    rank: "S級S",
    time: "3.33",
    st: "0.12",
    diff: "+0.10",
    results: "①②①④①③①②①③",
    evaluation:"◎"
},

"早川 清太郎": {
    car:6,
    handicap:"20m",
    rank: "S級S",
    time: "3.35",
    st: "0.13",
    diff: "+0.00",
    results: "②③④②①③②④③②",
    evaluation:"◎"
},

"有吉 辰也": {
    car:7,
    handicap:"30m",
    rank: "S級S",
    time: "3.37",
    st: "0.14",
    diff: "-0.11",
    results: "③⑤②③④②⑤③②④",
    evaluation:"◎"
},

"木村 武之": {
    car:8,
    handicap:"30m",
    rank: "S級S",
    time: "3.30",
    st: "0.07",
    diff: "+0.15",
    results: "①①①②①①③①②①",
    evaluation:"◎"
}

};

function openPlayer(name){

    const player = players[name];

    document.getElementById("playerName").innerHTML = "👤 " + name;

    document.getElementById("playerRank").innerHTML = player.rank;

    document.getElementById("playerTime").innerHTML = player.time;

    document.getElementById("playerST").innerHTML = player.st;

    document.getElementById("playerDiff").innerHTML = player.diff;

    document.getElementById("playerResults").innerHTML = player.results;

    document.getElementById("playerModal").style.display="block";

}


function closePlayer(){

    document.getElementById("playerModal").style.display="none";

}

function createRaceTable(){

    const table = document.getElementById("raceTable");

    table.innerHTML = "";

    for(let name in players){

        const player = players[name];

        table.innerHTML += `
        <tr>
            <td class="car car${player.car}">
                ${player.car}
            </td>

            <td>
                <a href="#" onclick="openPlayer('${name}')">
                    ${name}
                </a>
            </td>

            <td>${player.handicap}</td>

            <td>${player.time}</td>

            <td>${player.diff}</td>

            <td>${player.st}</td>

            <td>${player.results}</td>

            <td>${player.evaluation}</td>

        </tr>
        `;
    }

}

createRaceTable();
