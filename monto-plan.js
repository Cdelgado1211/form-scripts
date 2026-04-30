document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     SALUDO (FirstName / Company)
     ========================= */

  var saludoInput = document.querySelector(".saludoNombre input");
  var companyInput = document.querySelector(".companyName input");

  if (saludoInput) {
    var nombre = saludoInput.value.trim();

    if (!nombre && companyInput && companyInput.value.trim() !== "") {
      nombre = companyInput.value.trim();
    }

    if (!nombre) {
      nombre = "Cliente";
    }

    saludoInput.value = nombre;
  }


  /* =========================
     MONTO PLAN EN CHECKBOX
     ========================= */

  var montoInput = document.querySelector(".montoPlan input");
  var opcion = Array.from(document.querySelectorAll("li.checkboxes label, li label"))
  .find(function (label) {
    return label.innerHTML.includes("XXX");
  });
  if (montoInput && opcion && montoInput.value) {
    opcion.innerHTML = opcion.innerHTML.replace("XXX", montoInput.value);
  }

});