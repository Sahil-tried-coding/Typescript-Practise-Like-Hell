var button = document.querySelector("button");
var p = document.querySelector("p");
button.addEventListener("click", function () {
    p.textContent = "This is after the button click changed text";
});
