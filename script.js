const players = {

    "青山 周平": {
        rank: "S級S",
        time: "3.31",
        st: "0.08",
        diff: "+0.08",
        results: "①①②①③①①②③①"
    },

    "鈴木 圭一郎": {
        rank: "S級S",
        time: "3.28",
        st: "0.07",
        diff: "+0.05",
        results: "①②①①②③①①②①"
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
