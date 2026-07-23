function openPlayer(name){

    document.getElementById("playerName").innerHTML = "👤 " + name;

    document.getElementById("playerModal").style.display="block";

}


function closePlayer(){

    document.getElementById("playerModal").style.display="none";

}
