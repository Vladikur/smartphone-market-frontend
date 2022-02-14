import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';


function Main({ smartphons, removeCard, preloader, openPopup }) {

  const [visibleInfo, setVisibleInfo] = useState(false);

  useEffect(() => {
    if(smartphons.length < 1) {
      setVisibleInfo(true)
    } else {
      setVisibleInfo(false)
    }
  }, [smartphons]);

  return (
    <div className="main">
      {preloader ? <Preloader/> : ''}
      {visibleInfo ? <p className="main__info">Ничего не найдено :-(</p> : '' }
      <div className="main__card-container">
        {smartphons.map((smartphone) => (
          <Card
            key={smartphone._id}
            name={smartphone.name}
            description={smartphone.description}
            operatingSystem={smartphone.operatingSystem}
            condition={smartphone.condition}
            price={smartphone.price}
            id={smartphone._id}
            removeCard={removeCard}
            openPopup={openPopup}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
