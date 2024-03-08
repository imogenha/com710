document.getElementById("q1a2").addEventListener("click", e=>{
    document.getElementById("q1").style.display = "none";
    document.getElementById("ans").style.display = "block";
    document.getElementById("ans").innerHTML = "Congrats! You're a rogue ;)";
});

document.getElementById("q1a1").addEventListener("click", e=>{
    document.getElementById("q1").style.display = "none";
    document.getElementById("q2").style.display = "block";
});

document.getElementById("q2a2").addEventListener("click", e=>{
    document.getElementById("q2").style.display = "none";
    document.getElementById("ans").style.display = "block";
    document.getElementById("ans").innerHTML = "Truly magical! You're a warlock >:D";
});

document.getElementById("q2a1").addEventListener("click", e=>{
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "block";
});

document.getElementById("q3a2").addEventListener("click", e=>{
    document.getElementById("q3").style.display = "none";
    document.getElementById("ans").style.display = "block";
    document.getElementById("ans").innerHTML = "Spooky, You are a warlock.";
});

document.getElementById("q3a1").addEventListener("click", e=>{
    document.getElementById("q3").style.display = "none";
    document.getElementById("ans").style.display = "block";
    document.getElementById("ans").innerHTML = "Woo, You're a druid :)";
});