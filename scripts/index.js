const popupProfile = document.querySelector(".popup_profile");
const formProfile = popupProfile.querySelector(".popup__form");
const nameInput = formProfile.querySelector(".popup__form-name");
const aboutInput = formProfile.querySelector(".popup__form-occupation");

const closePopupProfile = popupProfile.querySelector(".popup__button-close");
const editButton = document.querySelector(".profile__info-button");

const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-description");

const popupAddCard = document.querySelector(".popup_add");
const formAddCard = popupAddCard.querySelector(".popup__form");
const nameCardInput = formAddCard.querySelector(".popup__form-name");
const aboutLinkInput = formAddCard.querySelector(".popup__form-occupation");

const closePopupaddCard = popupAddCard.querySelector(".popup__button-close");
const addButton = document.querySelector(".profile__info-add-button");

const popupImage = document.querySelector(".popup_image");
const closePopupImage = popupImage.querySelector(".popup__button-close");

const cardSection = document.querySelector(".cards");

const popups = [popupProfile, popupAddCard, popupImage];

const initialCards = [
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

function handleEscClose(event) {
  if (event.key === "Escape") {
    popups.forEach((popup) => {
      popup.classList.remove("popup_opened");
      document.removeEventListener("keydown", handleEscClose);
    });
  }
}

function createCard(name, link) {
  //ir por template
  //duplicarlo
  //colocar la imagen
  //colocar text
  //eventos
  const template = document.querySelector(".card-template").content;
  const newCard = template.querySelector(".elements").cloneNode(true);
  newCard.querySelector(".elements__image").src = link;
  newCard.querySelector(".elements__image").alt = name;
  newCard.querySelector(".elements__info-title").textContent = name;

  newCard
    .querySelector(".elements__image")
    .addEventListener("click", function () {
      document.addEventListener("keydown", handleEscClose);
      popupImage.classList.add("popup_opened");
      const img = popupImage.querySelector("img");
      img.src = link;
      img.alt = name;
      popupImage.querySelector(".popup__text").textContent = name;
    });
  newCard
    .querySelector(".elements__trash")
    .addEventListener("click", function (event) {
      newCard.remove();
    });
  newCard
    .querySelector(".elements__info-button")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("elements__info-button_active");
    });
  return newCard;
}

editButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  document.addEventListener("keydown", handleEscClose);
});

addButton.addEventListener("click", function () {
  popupAddCard.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscClose);
});

closePopupProfile.addEventListener("click", function () {
  popupProfile.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscClose);
});

closePopupaddCard.addEventListener("click", function () {
  popupAddCard.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscClose);
});

closePopupImage.addEventListener("click", function () {
  popupImage.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscClose);
});

formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameValue = nameInput.value;
  const aboutValue = aboutInput.value;
  if (nameValue !== "" && aboutValue !== "") {
    profileName.textContent = nameValue;
    profileAbout.textContent = aboutValue;
    popupProfile.classList.remove("popup_opened");
  }
});

formAddCard.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameValue = nameCardInput.value;
  const aboutValue = aboutLinkInput.value;
  if (nameValue !== "" && aboutValue !== "") {
    const card = createCard(nameValue, aboutValue);
    cardSection.prepend(card);
    popupAddCard.classList.remove("popup_opened");
  }
});

initialCards.forEach(function (item) {
  const card = createCard(item.name, item.link);
  cardSection.append(card);
});

popups.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup")) {
      popup.classList.remove("popup_opened");
      document.removeEventListener("keydown", handleEscClose);
    }
  });
});
