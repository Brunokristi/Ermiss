function myFunction() {
  var mobile = document.getElementById("mobile_menu");
  var icon = document.getElementById("hamburger");

  if (mobile.classList.contains("show")) {
    mobile.classList.remove("show");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  } else {
    mobile.classList.add("show");
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  }
}

function showPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function useEmail() {
  window.location.href = "contact.html"; // Change this to the desired email
  closePopup(); // Close the popup
}

function useWhatsApp() {
  window.location.href = "https://wa.me/1234567890"; // Change this to your WhatsApp number
  closePopup(); // Close the popup
}

function makeCall() {
  window.location.href = "tel:+421 944 673 607"; // Change this to your phone number
  closePopup(); // Close the popup
}