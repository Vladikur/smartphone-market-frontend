import React from 'react';


function Popup({ data, closePopup, isOpen}) {

  const popupClassName = (
    `popup ${isOpen ? 'popup_is-opened' : ''}`
);

  return (
    <section className={popupClassName}>
      <div className="popup__container">
        <button onClick={closePopup} type="button" className="card__button-remove"/>
        <h2 className="card__name">{data.name}</h2>
        <p className="card__description">Операционная система: {data.operatingSystem}</p>
        <p className="card__description">Состояние: {data.condition}</p>
        <p className="card__description">Цена: {data.price}₽</p>
        <p className="card__description">Описание: {data.description}</p>
      </div>
    </section>
  );
}

export default Popup;
