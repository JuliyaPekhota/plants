const contactSelect = document.querySelector(".contactSelect");
const contactList = document.querySelector(".selectList");
const selectItem = document.querySelector(".selectItem");
const adresses = document.querySelector(".adresses");

selectItem.addEventListener("click", () => {
    contactSelect.classList.toggle("drop");

    const list = Array.from(contactList.children);
    list.forEach((item, i) => {
        item.addEventListener("click", () => {
            selectItem.innerHTML = item.textContent;
            contactSelect.classList.remove("drop");

            const addrs = Array.from(adresses.children);
            addrs.forEach(adr => {
                adr.classList.remove("visible");
            });
            adresses.classList.add("visible");
            addrs[i].classList.add("visible");

            if (adresses.classList.contains("visible")) {
                document.querySelector("#imgWoman").style.opacity = "0";
            }
        });
    });
});



