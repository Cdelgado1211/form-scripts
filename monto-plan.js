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

  var opcion = Array.from(
    document.querySelectorAll("li.checkboxes label, li label")
  ).find(function (label) {
    return label.innerHTML.includes("XXX");
  });

  if (montoInput && opcion && montoInput.value) {

    var monto = parseFloat(montoInput.value);

    if (!isNaN(monto)) {
      monto = monto.toFixed(2);
    }

    opcion.innerHTML = opcion.innerHTML.replace("XXX", monto);
  }


  /* =========================
     DESHABILITAR BOTON
     HASTA MARCAR CHECKBOXES
     ========================= */

  document.querySelectorAll('form').forEach(function(form) {

    var checks = form.querySelectorAll('.opcion');
    var button = form.querySelector('button[type="submit"]');

    // Ignora formularios sin checks o sin botón
    if (!checks.length || !button) return;

    function validateForm() {

      var allChecked = Array.from(checks).every(function(check) {
        return check.checked;
      });

      button.disabled = !allChecked;
    }

    checks.forEach(function(check) {
      check.addEventListener('change', validateForm);
    });

    validateForm();
  });

});