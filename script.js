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
