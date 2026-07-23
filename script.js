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

   "早川 清太郎": {
    rank: "S級S",
    time: "3.35",
    st: "0.13",
    diff: "+0.00",
    results: "②③④②①③②④③②"
},

"有吉 辰也": {
    rank: "S級S",
    time: "3.37",
    st: "0.14",
    diff: "-0.11",
    results: "③⑤②③④②⑤③②④"
},

"木村 武之": {
    rank: "S級S",
    time: "3.30",
    st: "0.07",
    diff: "+0.15",
    results: "①①①②①①③①②①"
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
