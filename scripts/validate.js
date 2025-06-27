function enableValidation(configForm) {
  //localizar todos los forms de la pagina
  const forms = Array.from(document.querySelectorAll(configForm.formSelector));
  forms.forEach((form) => {
    //localizar el boton de form
    const button = form.querySelector(configForm.buttonSelector);
    //localizar inputs del form
    const inputs = Array.from(form.querySelectorAll(configForm.inputSelector));

    toggleSubmitButton(button, inputs);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        const errorElement = form.querySelector(`.popup__error-${input.name}`);
        if (input.validity.valid) {
          //quitamos el mensaje de error
          errorElement.textContent = "";
          input.classList.remove(configForm.inputErroClass);
        } else {
          //agregarmos el mensaje de error
          errorElement.textContent = input.validationMessage;
          input.classList.add(configForm.inputErroClass);
        }
        toggleSubmitButton(button, inputs);
      });
    });
  });
}

function toggleSubmitButton(button, inputs) {
  if (inputsValids(inputs)) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

function inputsValids(inputs) {
  return inputs.every((input) => {
    return input.validity.valid;
  });
}

enableValidation({
  inputSelector: ".popup__form-input",
  buttonSelector: ".popup__form-button",
  formSelector: ".popup__form",
  inputErroClass: "popup__input-error",
});
