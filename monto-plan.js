document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     SALUDO
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

  var opcionMonto = Array.from(
    document.querySelectorAll("li.checkboxes label, li label")
  ).find(function (label) {
    return label.innerHTML.includes("XXX");
  });

  if (montoInput && opcionMonto && montoInput.value) {

    var montoTexto = montoInput.value
      .replace("$", "")
      .replace(",", "")
      .trim();

    var monto = parseFloat(montoTexto);

    if (!isNaN(monto)) {
      monto = "$" + monto.toFixed(2);
    } else {
      monto = montoInput.value;
    }

    opcionMonto.innerHTML = opcionMonto.innerHTML.replace("XXX", monto);
  }


  /* =========================
     BOTON BLOQUEADO HASTA CHECKS
     ========================= */

  document.querySelectorAll("form").forEach(function (form) {

    var checks = form.querySelectorAll("li.opcion input[type='checkbox']");

    var button = form.querySelector(
      "button[type='submit'], input[type='submit']"
    );

    if (!checks.length || !button) return;

    function validateForm() {
      var allChecked = Array.from(checks).every(function (check) {
        return check.checked;
      });

      button.disabled = !allChecked;

      if (allChecked) {
        button.classList.remove("btn-disabled");
      } else {
        button.classList.add("btn-disabled");
      }
    }

    checks.forEach(function (check) {
      check.addEventListener("change", validateForm);
    });

    validateForm();
  });

});