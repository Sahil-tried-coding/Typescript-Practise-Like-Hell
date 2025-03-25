var form = document.querySelector("form");
var names = document.getElementById("name");
var age = document.getElementById("age");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (names.value === '' || age.value === '') {
        alert("name/age missiing");
    }
});
