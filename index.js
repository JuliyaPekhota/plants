const burger = document.querySelector("#burger");
const menu = document.querySelector(".nav");
const selects = document.querySelector(".selectsPrice");
const btnsPrice = document.querySelectorAll(".selectBtn");

const body = document.body;

const burgerHandler = (event) => {
    const wrapMenu = document.querySelector(".wrapMenu") ? document.querySelector(".wrapMenu").remove() : document.createElement("div");

    event.preventDefault();

    menu.classList.toggle("open");
    burger.classList.toggle("active");
    body.classList.toggle("noscroll");
    
    if (wrapMenu) {
        body.appendChild(wrapMenu);
        wrapMenu.classList.add("wrapMenu");
    }
}

burger.addEventListener("click", burgerHandler);

const handlerOnClose = () => {
    const wrapMenu = document.querySelector(".wrapMenu");

    menu.classList.remove("open");
    burger.classList.remove("active");
    body.classList.remove("noscroll");
    wrapMenu.remove();
}

const links = Array.from(menu.children);
links.forEach((link) => {
    link.addEventListener("click", handlerOnClose);
});

window.addEventListener("click", (event) => {
    if (event.target === document.querySelector(".wrapMenu")) {
        handlerOnClose();
    }
});


function openListPrice(element) {
    const selectsPrice = Array.from(selects.children);
    element.classList.toggle("show");  
    
    selectsPrice.forEach(select => {
        if (select !== element && select.classList.contains('show')) {
            select.classList.remove('show');
        }
    });
}

Array.from(btnsPrice).forEach(btn => {
    btn.addEventListener("click", (event) => event.stopPropagation());
});

console.log("- При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service (50 / 50)\n- Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах (50 / 50)\n- В разделе contacts реализован select с выбором городов (25 / 25)\n\nИтого: 125");