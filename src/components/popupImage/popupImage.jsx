export default function PopupImage (){
    return(
        <div className="popup popup-image">
        <div className="popup-image__form">
          <img className="popup-image__container" src="#" alt="Фото места" />
          <p className="popup-image__signature" />
          <button type="button" className="popup-image__close-btn popupCloseBtn" />
        </div>
      </div>
    )
}