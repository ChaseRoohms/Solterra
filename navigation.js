nav = false;
function toggleNav(x) {
    if(nav){
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
    else{
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    x.classList.toggle("change");
    nav = !nav
}

