const openMenu = document.getElementById("menu");
const closeMenu = document.getElementById("closeMenu")
openMenu.onclick = () =>{
    document.querySelector(".nav-items").classList.remove("disable");
    document.querySelector(".nav-close").classList.add("active");
}
closeMenu.onclick = () =>{
    document.querySelector(".nav-items").classList.add("disable");
    document.querySelector(".nav-close").classList.remove("active");
}