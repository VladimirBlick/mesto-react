
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./Footer/Footer";
import PopupWithForm from "./popupWithForm/PopupWithForm";
import PopupImage from "./ImagePopup/ImagePopup";
import { useState } from "react";

function App() {

  const [isEditProfilePopupOpen, setIEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isImagePopup, setImagePopup] = useState(false)
  
  function closeAllPopups(){
    setIEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setImagePopup(false)
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

   function handleCardClick(card){
    setSelectedCard(card)
    setImagePopup(true)
   }

  // function handleDeleteClick(){}
  
  return (
    <>

   <Header/>
   <Main
   onEditProfile = {handleEditProfileClick}
   onAddPlace = {handleAddPlaceClick}
   onEditAvatar = {handleEditAvatarClick}
   onCardClick = {handleCardClick}
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

<PopupImage card={selectedCard} isOpen={isImagePopup}  onClose = {closeAllPopups}/>
</>
  );}

export default App;
