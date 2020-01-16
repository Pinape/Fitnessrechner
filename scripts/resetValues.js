let button = document.getElementById("zuruecksetzen")
button.addEventListener("click", function () {
    document.getElementById("grundumsatz").innerHTML = ""
    document.getElementById("leistungsumsatz").innerHTML = ""

    const imageReset = "assets/liegend_male.png"
    document.getElementById("person").src = imageReset
})