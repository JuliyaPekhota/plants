const serviceTabs = document.querySelector(".tabs");
const buttons = Array.from(serviceTabs.children);
let pressedBtns = [];

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const elements = document.querySelectorAll(".card");
        
        if (pressedBtns.includes(index + 1)) {
            pressedBtns.splice(pressedBtns.indexOf(index + 1), 1);
        } else {
            pressedBtns = [index + 1, ...pressedBtns];
        }

       if (pressedBtns.length > 0) {
        
            elements.forEach(div => {
                div.classList.add("blur");
            });

            buttons.forEach(button => {
                button.classList.remove("active");
                button.classList.remove("disabled");
            });

            pressedBtns.forEach(item => {
                const elementsSelected = document.querySelectorAll(`[data-group="${item}"]`);
                elementsSelected.forEach(div => {
                    div.classList.remove("blur");
                });

                buttons[item - 1].classList.add("active");
            });

            if (pressedBtns.length === 2) {
                buttons.forEach(button => {
                    if (!button.classList.contains("active")) {
                        button.classList.add("disabled");
                    }
                });
            }

       } else {
            elements.forEach(div => {
                div.classList.remove("blur");
            });

            buttons.forEach(button => {
                button.classList.remove("active");
                button.classList.remove("disabled");
            });
       }
    }); 
});