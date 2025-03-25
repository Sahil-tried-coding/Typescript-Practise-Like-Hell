var start = document.getElementById("start");
var buttonh = document.getElementById("stop");
var timer = document.querySelector("h1");
var init;
start.addEventListener("click", function () {
    var count = 0;
    init = setInterval(function () {
        timer.innerText = count.toString();
        count++;
    }, 1000);
});
buttonh.addEventListener("click", function () {
    clearInterval(init);
});
