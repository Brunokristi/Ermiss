function myFunction() {
  var mobile = document.getElementById("mobile_menu");
  if (mobile.style.display === "block") {
    mobile.style.display = "none";
  } else {
    mobile.style.display = "block";
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