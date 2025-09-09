import {
  editButton,
  aboutInput,
  addButton,
  formProfile,
  formAddCard,
  initialCards,
  cardSection,
  nameInput,
  createCard,
  formProperties,
} from "./utils.js";

import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import PopupWithForm from "./PopupWithForm.js";

const userInfo = new UserInfo(
  ".profile__info-name",
  ".profile__info-description"
);

editButton.addEventListener("click", function () {
  popupProfile.open();
  nameInput.value = userInfo.getUserInfo().name;
  aboutInput.value = userInfo.getUserInfo().about;
});

addButton.addEventListener("click", function () {
  popupAddCard.open();
});

const popupProfile = new PopupWithForm(
  ".popup_profile",
  ({ name, occupation }) => {
    if (name !== "" && occupation !== "") {
      userInfo.setUserInfo(name, occupation);
      popupProfile.close();
    }
  }
);

const popupAddCard = new PopupWithForm(".popup_add", ({ name, link }) => {
  if (name !== "" && link !== "") {
    const card = createCard(name, link);
    cardSection.prepend(card);
    popupAddCard.close();
  }
});

const section = new Section(
  {
    data: initialCards,
    renderer: function (item) {
      const card = createCard(item.name, item.link);
      cardSection.append(card);
    },
  },
  ".cards"
);
section.renderItems();

const formValidatorProfile = new FormValidator(formProfile, formProperties);
formValidatorProfile.enableValidation();
const formValiadatorAddCard = new FormValidator(formAddCard, formProperties);
formValiadatorAddCard.enableValidation();
