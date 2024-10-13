function sendMail(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email_adress").value;
    const phone = document.getElementById("phone_number").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_cxxtd2a", "template_pe11dzh", {
        name: name,
        message: message,
        phone_number: phone,
        email_address: email,
    })
        .then(function (response) {
            swal("Správa úspešne odoslaná!");
            document.getElementById("name").value = "";
            document.getElementById("email_adress").value = "";
            document.getElementById("phone_number").value = "";
            document.getElementById("message").value = "";
        }, function (error) {
            swal("Správu sa nepodarilo odoslať");
        });
}

$(document).ready(function () {
    $("#navbar").load("navbar.html");
    $("#footer").load("footer.html");
});

