var form = document.querySelector("form");
var names = document.getElementById("name");
var agea = document.getElementById("age");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (names.value === '' || agea.value === '') {
        alert("name/age missiing");
    }
});
