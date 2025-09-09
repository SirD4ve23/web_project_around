import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
  }

  _setEventListeners() {
    super._setEventListeners();
    this._popup.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleSubmit(this._getInputValues(event.target));
    });
  }

  _getInputValues(form) {
    const inputValues = {};
    form.querySelectorAll(".popup__form-input").forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
}
