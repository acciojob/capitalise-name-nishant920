const nameInput = document.getElementById("fname");


nameInput.addEventListener("blur", function() {
  this.value = this.value.toUpperCase();
});