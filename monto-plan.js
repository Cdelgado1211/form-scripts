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
    var button = form.querySelector("#submit_form, input[type='submit'], button[type='submit']");

    if (!checks.length || !button) return;

    function setDisabledStyle() {
      button.disabled = true;
      button.classList.add("btn-disabled");

      button.style.setProperty("background", "#f1f5f9", "important");
      button.style.setProperty("background-image", "none", "important");
      button.style.setProperty("color", "#94a3b8", "important");
      button.style.setProperty("box-shadow", "none", "important");
      button.style.setProperty("cursor", "not-allowed", "important");
      button.style.setProperty("opacity", "1", "important");
      button.style.setProperty("transform", "none", "important");
    }

    function setEnabledStyle() {
      button.disabled = false;
      button.classList.remove("btn-disabled");

      button.style.removeProperty("background");
      button.style.removeProperty("background-image");
      button.style.removeProperty("color");
      button.style.removeProperty("box-shadow");
      button.style.removeProperty("cursor");
      button.style.removeProperty("opacity");
      button.style.removeProperty("transform");
    }

    function validateForm() {
      var allChecked = Array.from(checks).every(function (check) {
        return check.checked;
      });

      if (allChecked) {
        setEnabledStyle();
      } else {
        setDisabledStyle();
      }
    }

    checks.forEach(function (check) {
      check.addEventListener("change", validateForm);
    });

    validateForm();
  });

});