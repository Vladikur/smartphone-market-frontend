import React from 'react';


function SearchForm({searchSmartphone}) {

  const initialFormState = {
    name: '', 
    price1: '',
    price2: '',
    condition: 'не выбрано',
    operatingSystem: 'не выбрано',
  }
  const [data, setData] = React.useState(initialFormState);



  function handleChange(e) {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchSmartphone(data);
  }

  function handleResetForm() {
    setData(initialFormState)
    searchSmartphone(initialFormState);
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="search-form__inputs-container">
        <div className="search-form__input-container">
          <span className="search-form__input-name">Марка телефона:</span>
          <input value={data.name || ''} onChange={handleChange} className="search-form__input" type="text" name="name"/>
        </div>
        <div className="search-form__input-container">
          <span className="search-form__input-name">Цена: От</span>
          <input value={data.price1 || ''} onChange={handleChange} className="search-form__input" type="number" name="price1"/>
          <span className="search-form__input-name">До</span>
          <input value={data.price2 || ''} onChange={handleChange} className="search-form__input" type="number" name="price2"/>
        </div>
        <div className="search-form__input-container">
          <span className="search-form__input-name">Операционная система</span>
          <select value={data.operatingSystem || ''} onChange={handleChange} className="search-form__select" name="operatingSystem">
            <option value="не выбрано">не выбрано</option>
            <option value="Android">Android</option>
            <option value="iOS">iOS</option>
            <option value="другая">другая</option>
          </select>
          <span className="search-form__input-name">Состояние:</span>
          <select value={data.condition || ''} onChange={handleChange} className="search-form__select" name="condition">
            <option value="не выбрано">не выбрано</option>
            <option value="новый">новый</option>
            <option value="потертости">потертости</option>
            <option value="сколы">сколы</option>
            <option value="нерабочий">нерабочий</option>
          </select>
        </div>
      </div>
      <div className="search-form__button-container">
        <button type="submit" className="search-form__submit" >Найти телефон</button>
        <button onClick={handleResetForm} type="button" className="search-form__submit" >Сбросить форму</button>
      </div>
    </form>
  );
}

export default SearchForm;
