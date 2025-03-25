var btn = document.querySelector("button");
var image_1 = document.getElementById("superman");
var image_2 = document.getElementById("batman");
btn.addEventListener("click", function () {
    var sawp = image_1.src;
    image_1.src = image_2.src;
    image_2.src = sawp;
});
