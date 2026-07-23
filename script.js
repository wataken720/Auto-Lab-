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

    document.getElementById("playerName").innerHTML = "👤 " + name;

    document.getElementById("playerRank").innerHTML = "S級S";

    document.getElementById("playerTime").innerHTML = "3.31";

    document.getElementById("playerST").innerHTML = "0.08";

    document.getElementById("playerDiff").innerHTML = "+0.08";

    document.getElementById("playerResults").innerHTML =
    "①①②①③①①②③①";

    document.getElementById("playerModal").style.display="block";

}


function closePlayer(){

    document.getElementById("playerModal").style.display="none";

}
