const openModalButtons = document.querySelectorAll("[data-window-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const window = document.querySelector(button.dataset.windowTarget);
        openModal(window);
    })
})

overlay.addEventListener("click", () => {
    const windows = document.querySelectorAll(".window.active");
    windows.forEach(window => {
        closeModal(window);
    })
})


closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const window = button.closest(".window")
        closeModal(window)
    })
})

function openModal(window) {
    if (window == null) return
    window.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(window) {
    if (window == null) return
    window.classList.remove("active");
    overlay.classList.remove("active");
}

function myFunction() {
    var x = document.getElementById("myMain_menu");
    if (x.className === "hamburger") {
        x.className += " responsive";
    } else {
        x.className = "hamburger"
    }
}