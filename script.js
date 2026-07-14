"use strict";

const currentYear = document.getElementById("current-year");
const productButtons = document.querySelectorAll(".product-button");
const toast = document.getElementById("toast");

let toastTimeout;

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

productButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.product || "Producto";

    showToast(`${productName} seleccionado`);

    /*
      Más adelante podés reemplazar esta acción por un enlace
      directo al checkout de Shopify, Mercado Pago o WhatsApp.

      Ejemplo:
      window.location.href = "https://tutienda.com/products/producto";
    */
  });
});

function showToast(message) {
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("visible");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2500);
}