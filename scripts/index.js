import {
  editButton,
  handleEscClose,
  popupAddCard,
  popupProfile,
  aboutInput,
  closePopupProfile,
  closePopupaddCard,
  addButton,
  profileAbout,
  profileName,
  closePopupImage,
  formProfile,
  popupImage,
  formAddCard,
  aboutLinkInput,
  nameCardInput,
  popups,
  initialCards,
  cardSection,
  nameInput,
  createCard,
  formProperties,
} from "./utils.js";

import FormValidator from "./FormValidator.js";

editButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_opened");
  editButton.value = profileName.textContent;
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

const formValidatorProfile = new FormValidator(formProfile, formProperties);
formValidatorProfile.enableValidation();
const formValiadatorAddCard = new FormValidator(formAddCard, formProperties);
formValiadatorAddCard.enableValidation();
