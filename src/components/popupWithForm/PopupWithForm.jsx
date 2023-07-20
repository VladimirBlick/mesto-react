export default function PopupWithForm({name, title, titleButton, children, isOpen, onClose}){
    return(
        <div className={`popup ${name} ${isOpen && 'popup_opened'}` }>
      <div className={`${name}__container`}>
        <button type="button" className="popup-profile__close-btn popupCloseBtn" onClick={onClose}/>
        <h2 className="popup-profile__title">{title}</h2>
        <form className="popup-profile__form popup__form" name="popupProfileForm" noValidate="">
            {children}
          <button type="submit" className="popup__button popup-profile__btn"> {titleButton} </button>
        </form>
      </div>
    </div>
    )
}