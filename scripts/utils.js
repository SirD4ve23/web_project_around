import Card from "./Card.js";
export const popupProfile = document.querySelector(".popup_profile");
export const formProfile = popupProfile.querySelector(".popup__form");
export const nameInput = formProfile.querySelector(".popup__form-name");
export const aboutInput = formProfile.querySelector(".popup__form-occupation");

export const closePopupProfile = popupProfile.querySelector(
  ".popup__button-close"
);
export const editButton = document.querySelector(".profile__info-button");

export const profileName = document.querySelector(".profile__info-name");
export const profileAbout = document.querySelector(
  ".profile__info-description"
);

export const popupAddCard = document.querySelector(".popup_add");
export const formAddCard = popupAddCard.querySelector(".popup__form");
export const nameCardInput = formAddCard.querySelector(".popup__form-name");
export const aboutLinkInput = formAddCard.querySelector(
  ".popup__form-occupation"
);

export const closePopupaddCard = popupAddCard.querySelector(
  ".popup__button-close"
);
export const addButton = document.querySelector(".profile__info-add-button");

export const popupImage = document.querySelector(".popup_image");
export const closePopupImage = popupImage.querySelector(".popup__button-close");

export const cardSection = document.querySelector(".cards");

export const popups = [popupProfile, popupAddCard, popupImage];

export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

export const formProperties = {
  inputSelector: ".popup__form-input",
  buttonSelector: ".popup__form-button",
  formSelector: ".popup__form",
  inputErroClass: "popup__input-error",
};

export function handleEscClose(event) {
  if (event.key === "Escape") {
    popups.forEach((popup) => {
      popup.classList.remove("popup_opened");
      document.removeEventListener("keydown", handleEscClose);
    });
  }
}

export function openPopupImage(name, link) {
  popupImage.classList.add("popup_opened");
  const img = popupImage.querySelector("img");
  img.src = link;
  img.alt = name;
  popupImage.querySelector(".popup__text").textContent = name;
}

export function createCard(name, link) {
  const newCard = new Card(name, link, ".card-template");
  return newCard.renderCard();
}
