export default class FormValidator {
  constructor(form, properties) {
    this._form = form;
    this._properties = properties;
  }

  enableValidation() {
    //localizar todos los forms de la pagina

    //localizar el boton de form
    const button = this._form.querySelector(this._properties.buttonSelector);
    //localizar inputs del form
    const inputs = Array.from(
      this._form.querySelectorAll(this._properties.inputSelector)
    );

    this._toggleSubmitButton(button, inputs);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        const errorElement = this._form.querySelector(
          `.popup__error-${input.name}`
        );
        if (input.validity.valid) {
          //quitamos el mensaje de error
          errorElement.textContent = "";
          input.classList.remove(this._properties.inputErroClass);
        } else {
          //agregarmos el mensaje de error
          errorElement.textContent = input.validationMessage;
          input.classList.add(this._properties.inputErroClass);
        }
        this._toggleSubmitButton(button, inputs);
      });
    });
  }

  _toggleSubmitButton(button, inputs) {
    if (this._inputsValids(inputs)) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }

  _inputsValids(inputs) {
    return inputs.every((input) => {
      return input.validity.valid;
    });
  }
}
