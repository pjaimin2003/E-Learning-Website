let coloredOne = "home-menu";

function colored(name){
    document.getElementById(coloredOne).style.color = "white";
    document.getElementById(name).style.color = "red";
    coloredOne = name;
}


