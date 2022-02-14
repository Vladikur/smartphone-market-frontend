import React, { useEffect, useState } from 'react';
import { Route, Switch, } from 'react-router-dom';
import * as MainApi from '../../utils/MainApi';
import Main from '../Main/Main';
import Form from '../Form/Form';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Popup from '../Popup/Popup';
import { smartphonsSearch } from '../../utils/FindSmartphons';
// import { initialSmartphons } from '../../utils/InitialSmartphons';


function App() {

  const [cards, setCards] = useState([]);
  const [isReceiving, setIsReceiving] = React.useState(false);
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  // Добавление нескольких карточек
  // useEffect(() => {
  //   initialSmartphons.forEach(element => (
  //     MainApi
  //     .addSmartphone(element)
  //     .then (data => {

  //     })
  //     .catch(err => console.log(err))
  //   ))
  // }, []);

  function openPopup(data) {
    setPopupOpen(true)
    setSelectedCard(data)
  } 

  function closePopup() {
    setPopupOpen(false)
  } 

  useEffect(() => {
    setIsReceiving(true)
    MainApi
    .getContent()
    .then (data => {
      setCards(data.reverse())
    })
    .catch(err => console.log(err))
    .finally(() => {
      setIsReceiving(false)
    });
  }, []);

  function handleAddCard(smartphone) {
    MainApi
    .addSmartphone(smartphone)
    .then (data => {
      setCards([data, ...cards]);
    })
    .catch(err => console.log(err))
  }

  function onRemoveCard(id) {
    MainApi
    .deleteSmartphone(id)
    .then (deleteCard => {
      setCards((state) => state.filter((c) => c._id !== deleteCard._id));
    })
    .catch(err => console.log(err))
  }

  function onSearchSmartphone(params) {
    setIsReceiving(true)
    MainApi
    .getContent()
    .then (data => {
      setCards(smartphonsSearch(data.reverse(), params))
    })
    .catch(err => console.log(err))
    .finally(() => {
      setIsReceiving(false)
    });
  }

  return (
    <div className="page">
      <Header/>
      <Switch>

        <Route exact path='/'>
          <h1 className="app__header">Добро пожаловать в онлайн-магазин телефонов! :-)</h1>
        </Route>

        <Route exact path='/main'>
          <SearchForm
          searchSmartphone={onSearchSmartphone}
          />
          <Main
            smartphons={cards}
            removeCard={onRemoveCard}
            preloader={isReceiving}
            openPopup={openPopup}
          />
        </Route>

        <Route path='/form'>
          <Form
            onAddCard={handleAddCard}
          />
        </Route>

      </Switch>

      <Popup
        closePopup={closePopup}
        isOpen={popupOpen}
        data={selectedCard}
      />
    </div>
  );
}

export default App;
