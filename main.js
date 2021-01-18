function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementsByTagName("body").style.cssText = "-webkit-filter: blur(1px);";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}