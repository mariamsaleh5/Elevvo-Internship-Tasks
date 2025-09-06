const sidebar=document.getElementById("sidebar");
const toggleButton=document.getElementById("sidebartoggle");
toggleButton.addEventListener("click",()=>{
sidebar.classList.toggle("open");
const isOpen = sidebar.classList.contains('open');
toggleButton.setAttribute('aria-expanded', isOpen);
})