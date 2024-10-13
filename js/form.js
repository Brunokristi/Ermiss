function getSelected(radioName) {
    const radios = document.getElementsByName(radioName);
    for (let radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null;
}

function sendMail(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const social = document.getElementById("social").value;
    const date = document.getElementById("date").value;
    const position = getSelected("position");
    const area = document.getElementById("area").value;
    const link = getSelected("link");


    console.log(name, email, phone, social, date, position, area, link);


    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        social: social,
        date: date,
        position: position,
        area: area,
        link: link
    };

    emailjs.send('service_cxxtd2a', 'template_kitlnxy', templateParams)
        .then(function (response) {
            swal("Požiadavka úspešne odoslaná!");
            setTimeout(function () {
                window.location.href = "positions.html";
            }, 1000);


        }, function (error) {
            swal("Požiadavku sa nepodarilo odoslať");
        });
}

$(document).ready(function () {
    $("#navbar").load("navbar.html");
    $("#footer").load("footer.html");
});