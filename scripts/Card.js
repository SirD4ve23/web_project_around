export default class Card {
  constructor(name, link, templateSelector, { handleClick }) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleClick = handleClick;
  }

  renderCard() {
    this._getTemplate();
    this._setEventListeners();
    return this._element;
  }

  _getTemplate() {
    const template = document.querySelector(this._templateSelector).content;
    const newCard = template.querySelector(".elements").cloneNode(true);
    newCard.querySelector(".elements__image").src = this._link;
    newCard.querySelector(".elements__image").alt = this._name;
    newCard.querySelector(".elements__info-title").textContent = this._name;
    this._element = newCard;
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._handleClick(this._name, this._link);
      });
    this._element
      .querySelector(".elements__trash")
      .addEventListener("click", (event) => {
        this._element.remove();
      });
    this._element
      .querySelector(".elements__info-button")
      .addEventListener("click", (event) => {
        event.target.classList.toggle("elements__info-button_active");
      });
  }
}
