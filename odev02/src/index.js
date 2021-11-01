kedi = Math.floor(Math.random() * 3);
let count = 0;
showCard = (imgId) => {
    if(kedi == imgId){
        document.getElementById("img"+imgId).src = "/img/kedi.jpg";
        for (let i = 0; i < 3; i++) {
            if(i!=kedi){
                document.getElementById("img"+i).src = "/img/kopek.jpg";
            }
        }
        oyunuBitir("w");
    }else{
        count++;
        document.getElementById("img"+imgId).src = "/img/kopek.jpg";
        if(count == 2){
            document.getElementById("img"+kedi).src = "/img/kedi.jpg";
            oyunuBitir("l");
        }
    }
}

oyunuBitir = (score) => {
    for (let i = 0; i < 3; i++) {
        document.getElementById("img"+i).onclick = "";
    }
    if(score == "w"){
        document.getElementById("kazandinId").style.display = "inline";
    }else if(score == "l"){
        document.getElementById("yenildinId").style.display = "inline";
    }
    document.getElementById("alanId").innerHTML = "Yeni bir oyun oynamak istersen" + "<a href='#' onclick='restart()'> Buraya </a>" + "tıklayabilirsin.";
}

restart = () => {
    location.reload();
}