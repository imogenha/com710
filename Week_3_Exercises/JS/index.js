document.getElementById("btnNope").addEventListener("click", e=>{
    document.getElementById("cookieBanner").style.display = "none";
});


document.getElementById("btnYes").addEventListener("click", e=>{
    document.getElementById("cookiehead").innerHTML = "You sure did press that button!";
    document.getElementById("cookietxt").innerHTML = "Good for you!";
    document.getElementById("btnYes").style.display = "none";
    document.getElementById("btnNope").innerHTML = "Yay!";
});
