export default function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup popup-image ${isOpen && 'popup_opened'}`}>
      <div className="popup-image__form">
        <img className="popup-image__container" src={card.link} alt={`Фото места ${card.name}`} />
        <p className="popup-image__signature">{card.name}</p>
        <button type="button" className="popup-image__close-btn popupCloseBtn" onClick={onClose} />
      </div>
    </div>
  )
}