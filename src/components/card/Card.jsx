export default function Card({ card, onCardClick }) {
    return (
        <div className="element">
            <button type="button" className="element_delete" />
            <img src={card.link} alt={`Изображение ${card.name}`}
                className="element__image" onClick={() => onCardClick({ link: card.link, name: card.name })} />
            <div className="element__city">
                <h2 className="element__city-name"> {card.name}</h2>
                <div className="element__city-like-container">
                    <button type="button" className="element__city-like" />
                    <span className="element__city-like-counter" />
                </div>
            </div>
        </div>
    )
}