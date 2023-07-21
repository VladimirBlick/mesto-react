
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import PopupWithForm from "./popupWithForm/PopupWithForm";
import PopupImage from "./popupImage/popupImage";
import { useState } from "react";

function App() {

  const [isEditProfilePopupOpen, setIEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  
  function closeAllPopups(){
    setIEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
  }

  function handleEditProfileClick(){
    setIEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(true)
  }

  // function handleclickCardClick(){}

  // function handleclickDeleteClick(){}
  
  return (
    <>

   <Header/>
   <Main
   onEditProfile = {handleEditProfileClick}
   onAddPlace = {handleAddPlaceClick}
   onEditAvatar = {handleEditAvatarClick}
   />

   <Footer/>
  

   <PopupWithForm 
    name='popup-profile'
    title='Редактировать профиль'
    titleButton='Сохранить'
    isOpen = {isEditProfilePopupOpen}
    onClose = {closeAllPopups}
    >

  <label className="popup__input-element">
            <input
              className="popup__input"
              id="name"
              placeholder="Имя"
              required=""
              minLength={2}
              maxLength={40}
              type="text"
              name="name"
            />
            <span className="popup__error popup__error_name" />
          </label>
          <label className="popup__input-element">
            <input
              className="popup__input"
              id="job"
              placeholder="Деятельность"
              required=""
              minLength={2}
              maxLength={200}
              type="text"
              name="job"
            />
            <span className="popup__error popup__error_job" />
          </label>
</PopupWithForm>

<PopupWithForm 
    name='popup-card'
    title='Новое место'
    titleButton='Создать'
    isOpen = {isAddPlacePopupOpen}
    onClose = {closeAllPopups}
    >
          <label className="popup__input-element">
            <input
              className="popup__input"
              id="title"
              placeholder="Название"
              required=""
              type="text"
              minLength={2}
              maxLength={30}
              name="title"
            />
            <span className="popup__error popup__error_title" />
          </label>
          <label className="popup__input-element">
            <input
              className="popup__input"
              id="link"
              placeholder="Ссылка на картинку"
              required=""
              type="url"
              name="link"
            />
            <span className="popup__error popup__error_link" />
          </label>
</PopupWithForm>

<PopupWithForm 
    name='popup-update'
    title='Обновить аватар'
    titleButton='Сохранить'
    isOpen = {isEditAvatarPopupOpen}
    onClose = {closeAllPopups}
    >
          <label className="popup__input-element">
            <input
              className="popup__input"
              id="avatar"
              placeholder="Ссылка на картинку"
              required=""
              type="url"
              name="avatar"
            />
            <span className="popup__error popup__error_avatar" />
          </label>
</PopupWithForm>

<PopupWithForm 
    name='popup-delete'
    title='Вы уверены?'
    titleButton='Да'>

</PopupWithForm>

<PopupImage />

    {/* <div className="popup popup-profile">
      <div className="popup-profile__container">
        <button
          type="button"
          className="popup-profile__close-btn popupCloseBtn"
        />
        <h2 className="popup-profile__title">Редактировать профиль</h2>
        <form
          className="popup-profile__form popup__form"
          name="popupProfileForm"
          noValidate=""
        >
        
          <button type="submit" className="popup__button popup-profile__btn">
            Сохранить
          </button>
        </form>
      </div>
    </div>
    <div className="popup popup-card">
      <div className="popup-card__container">
        <button type="button" className="popup-card__close-btn popupCloseBtn" />
        <h2 className="popup-card__title">Новое место</h2>
        <form
          className="popup-card__form popup__form"
          name="popup-card-Form"
          noValidate=""
        >

          <button type="submit" className="popup__button">
            Создать
          </button>
        </form>
      </div>
    </div> */}

    {/* <div className="popup popup-update">
      <div className="popup-update__container">
        <button type="button" className="popup-update__close-btn popupCloseBtn" />
        <h2 className="popup-update__title">Обновить аватар</h2>
        <form
          className="popup-update__form popup__form"
          name="popupUpdateAvatar"
          noValidate=""
        >

          <button type="submit" className="popup__button popup-update__btn">
            Сохранить
          </button>
        </form>
      </div>
    </div>
    <div className="popup popup-delete">
      <div className="popup-delete__container">
        <form
          className="popup-delete__form popup__form"
          name="popupDeleteCard"
          noValidate=""
        >
          <button
            type="button"
            className="popup-delete__close-btn popupCloseBtn"
          />
          <h2 className="popup-delete__title">Вы уверены?</h2>
          <button type="submit" className="popup__button popup-delete__btn">
            Да
          </button>
        </form>
      </div>
    </div> */}
  </>
  
  );
}

export default App;
