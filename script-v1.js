document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn-dark").addEventListener("click", function() {
        document.body.classList.toggle("btn-dark");});

    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".nav-toblock").classList.toggle("active");});
}   );