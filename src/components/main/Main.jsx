export default function Main ({onEditProfile, onAddPlace, onEditAvatar}){
    return (
        <main>
        <section className="profile">
          <button type="button" className="profile__overlay" onClick={onEditAvatar} >
            <img src="#" alt="Аватар" className="profile__avatar" />
          </button>
          <div className="profile__info">
            <div className="profile__contain">
              <h1 className="profile__name"> </h1>
              <button type="button" className="profile__popup-profile" onClick={onEditProfile}/>
            </div>
            <p className="profile__job" />
          </div>
          <button type="button" className="profile__add-button" onClick={onAddPlace}/>
        </section>
        <section className="elements"></section>
      </main>
    )
}