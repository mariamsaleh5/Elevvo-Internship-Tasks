const mode_btn = document.getElementById("theme-toggle");
const body = document.body;

// الحالة الابتدائية
if (body.classList.contains("dark")) {
  mode_btn.innerHTML = "<i class='fa-solid fa-sun'></i>";
} else {
  mode_btn.innerHTML = "<i class='fa-solid fa-moon'></i>";
}

mode_btn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  if (body.classList.contains("dark")) {
    mode_btn.innerHTML = "<i class='fa-solid fa-sun'></i>";
  } else {
    mode_btn.innerHTML = "<i class='fa-solid fa-moon'></i>";
  }
});
