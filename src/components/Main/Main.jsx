import { useEffect, useState } from "react"
import api from "../../utils/api"
import Card from "../Card/Card"

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
      .then(([dataUser, dataCard]) => {
        setUserName(dataUser.name)
        setUserDescription(dataUser.about)
        setUserAvatar(dataUser.avatar)
        dataCard.forEach(data => data.myId = dataUser._id)
        setCards(dataCard)
      });
  }, [])


  return (
    <main>
      <section className="profile">
        <button type="button" className="profile__overlay" onClick={onEditAvatar} >
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
        </button>
        <div className="profile__info">
          <div className="profile__contain">
            <h1 className="profile__name"> {userName}</h1>
            <button type="button" className="profile__popup-profile" onClick={onEditProfile} />
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace} />
      </section>
      <section className="elements">
        {cards.map(data => {
          return (
            <div className="element" key={data._id}>
              <Card card={data} onCardClick={onCardClick} />
            </div>)
        }
        )}

      </section>
    </main>
  )
}
