document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("leadPopup").style.display = "flex";
  }, 3000);
});

function closePopup() {
  document.getElementById("leadPopup").style.display = "none";
}
