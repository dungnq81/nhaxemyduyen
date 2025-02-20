// Gioi thieu
const gioithieu=document.querySelector("#gioithieu");
const gioithieuButton=document.querySelector("#gioithieu-btn");
gioithieuButton.addEventListener("click",()=>{
    gioithieu.classList.toggle("invisible");
})

// dich vu
const dichvu=document.querySelector("#dichvu");
const dichvuButton=document.querySelector("#dichvu-btn");
dichvuButton.addEventListener("click",()=>{
    dichvu.classList.toggle("invisible");
})

// tra cuu
const tracuu=document.querySelector("#tracuu");
const tracuuButton=document.querySelector("#tracuu-btn");
tracuuButton.addEventListener("click",()=>{
    tracuu.classList.toggle("invisible");
})

// menu
const menu=document.querySelector("#menu");
const menuButton=document.querySelector("#menu-btn");
menuButton.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
})