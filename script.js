function openPage(link){
    window.open(link, "_self");
}

function comingSoon(){
    alert("Coming Soon!");
}

function willRedirect(){
    if(confirm("You will redirect to another page!")){
        location.href="https://discord.gg/dnU5SpvBfY";
    }
}