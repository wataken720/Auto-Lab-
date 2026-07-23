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
    },

    "永井 大介": {
        rank: "S級S",
        time: "3.30",
        st: "0.09",
        diff: "+0.06",
        results: "②①③①②①③②①①"
    },

    "高橋 貢": {
        rank: "S級S",
        time: "3.32",
        st: "0.10",
        diff: "+0.10",
        results: "③②①④②①③①②③"
    },

    "佐藤 摩弥": {
        rank: "S級S",
        time: "3.34",
        st: "0.11",
        diff: "+0.12",
        results: "①③②⑤①②③①④②"
    },

    "黒川 京介": {
        rank: "S級A",
        time: "3.35",
        st: "0.09",
        diff: "+0.07",
        results: "②①④③①②⑤①③②"
    },

    "金子 大輔": {
        rank: "S級A",
        time: "3.33",
        st: "0.08",
        diff: "+0.06",
        results: "③①②②④①③②①④"
    },

    "中村 雅人": {
        rank: "S級A",
        time: "3.36",
        st: "0.10",
        diff: "+0.09",
        results: "④②①③②④①③②①"
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
