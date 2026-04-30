document.addEventListener("DOMContentLoaded", function () {
  var montoInput = document.querySelector(".montoPlan input");
  var opcion = document.querySelector("#li_4 label");

  if (montoInput && opcion) {
    opcion.innerHTML = opcion.innerHTML.replace("XXX", montoInput.value);
  }
});