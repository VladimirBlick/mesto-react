class Api {
    constructor(options){
      this._url = options.baseUrl;
      this._headers = options.headers;
      this._authorization = options.headers.authorization;
    }
  
    _getResponseData(res) {
      if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
  }
  
    getInfo(){
      return fetch(`${this._url}/users/me`, {
        headers: {
          authorization: this._authorization
        }
      })
      .then (res => this._getResponseData(res))
    }
  
  getCards(){
    return fetch (`${this._url}/cards`, {
  headers:{
    authorization: this._authorization
  }})
  .then(res => this._getResponseData(res))
  }
  
  setUserInfo(data){
    return fetch (`${this._url}/users/me`, {
      method :'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.job,
      })
    })
    .then (res => this._getResponseData(res))
  }
  setAvatar(data){
    return fetch (`${this._url}/users/me/avatar`, {
      method :'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
    .then (res => this._getResponseData(res))
  }
  
  addCard(data){
    return fetch (`${this._url}/cards`, {
      method :'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        link: data.link,
      })
    })
    .then (res => this._getResponseData(res))
  }
  addLike(cardId){
    return fetch (`${this._url}/cards/${cardId}/likes`, {
      method :'PUT',
      headers:{
     authorization: this._authorization,}
      })
      .then (res => this._getResponseData(res))
    }
  
    deleteLike(cardId){
      return fetch (`${this._url}/cards/${cardId}/likes`, {
        method :'DELETE',
        headers:{
       authorization: this._authorization,}
        })
        .then (res => this._getResponseData(res))
      }
  
      deleteCard(cardId){
        return fetch (`${this._url}/cards/${cardId}`, {
          method :'DELETE',
          headers:{
         authorization: this._authorization}
          })
          .then (res => this._getResponseData(res))
        }
  }
  
  const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
    headers: {
      authorization: 'e03d7410-18b9-44d3-a520-a37d81ed7110',
      'Content-Type': 'application/json'
    }
  })

  export default api