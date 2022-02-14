import React from 'react';


function Card({ name, description, operatingSystem, condition, price, id, removeCard, openPopup }) {

  function onRemoveCard() {
    removeCard(id)
  }

  function handleOpenPopup() {
    openPopup({ name, description, operatingSystem, condition, price })
  }

  return (
    <div className="card">
      <h2 className="card__name">{name}</h2>
      <p className="card__description">Операционная система: {operatingSystem}</p>
      <p className="card__description">Состояние: {condition}</p>
      <p className="card__description">Цена: {price}₽</p>
      <button onClick={onRemoveCard} type="button" className="card__button-remove"/>
      <button onClick={handleOpenPopup} type="button" className="card__button-description">Посмотреть описание</button>
    </div>
  );
}

export default Card;
