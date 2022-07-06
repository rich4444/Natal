const openButton = document.getElementById("openNavbar");
const closeButton = document.getElementById("closeNavbar");
const navBarMenu = document.getElementById("navbarMenu");

openButton.addEventListener("click", () => {
    document.body.classList.add("preventScroll");
    navBarMenu.classList.add("showMenu");
});
closeButton.addEventListener("click", () => {
    document.body.classList.remove("preventScroll");
    navBarMenu.classList.remove("showMenu");
});


const carousel = document.getElementById("carousel");
const carouselItems = carousel.querySelectorAll("li");


setInterval(testt, 4000)

function testt (){
    carouselItems.forEach((item) => {
        carouselFunc(item);
    })
}

function carouselFunc (item){
    const current = item.classList[0];
    item.classList.add(rotateCarousel(current));
    item.classList.remove(current);
}


function rotateCarousel (position){
    switch(position){
        case "first":
            return "second";
        case "second":
            return "third";
        case "third":
            return "forth";
        case "forth":
            return "fifth";
        case "fifth":
            return "first";
    }
}

//Direcciones
const sucursales = {
    pasomolino: {
        dir: "Direccion sucursal paso molino",
        tel: "2242 6822"
    },
    lateja: {
        dir: "Direccion sucursal la teja",
        tel: "2222 2222"
    },
    laspiedras: {
        dir: "Direccion sucursal las piedras",
        tel: "2232 5796"
    },
    lapaloma: {
        dir: "Direccion sucursal lapaloma",
        tel: "2282 4444"
    }
}

const selectSucursal = document.getElementById("sucursales");
const sucursalDir = document.getElementById("direccion-sucursal")
const sucursalTel = document.getElementById("telefono-sucursal")

selectSucursal.addEventListener("change", () => {
    sucursalDir.innerHTML = sucursales[selectSucursal.value].dir;
    sucursalTel.innerHTML = sucursales[selectSucursal.value].tel;
})
