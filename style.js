const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
const content = document.querySelector('h1')

open.addEventListener("click", () => {
 console.log('opening')
    container.classList.add("show-nav");
});

close.addEventListener("click", () => container.classList.remove("show-nav"));

content.addEventListener('click', () => {
    console.log('clicked')
})