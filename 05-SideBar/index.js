const toggleBtn = document.querySelector(".toggle-btn")
const closeBtn = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")

toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show-sidebar")
});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});