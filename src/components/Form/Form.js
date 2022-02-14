import React, { useEffect, useState } from 'react';


function Form({onAddCard}) {

  const initialForm = {
    name: '', 
    description: '',
    operatingSystem: 'Android',
    condition: 'новый',
    price: '',
  }

  const [data, setData] = useState(initialForm);
  const [visibleInfo, setVisibleInfo] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if(data.name.length > 1 && data.description.length > 1 && data.price.length > 0) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [data]);

  function handleChange(e) {
    setVisibleInfo(false)
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddCard(data);
    setData(initialForm)
    setVisibleInfo(true)
    setValid(false)
  }

  const submitButtonClassName = (
    `${!valid ? 'form__submit_type_disactive' : 'form__submit'}`
  );

  return (
    <form onSubmit={handleSubmit} className="form" noValidate>
      <div className="form__input-container">
          <span className="form__input-name">Марка телефона</span>
          <input value={data.name || ''} onChange={handleChange} className="form__input" type="text" name="name" required minLength="2" maxLength="30" />
      </div>
      <div className="form__input-container">
          <span className="form__input-name">Описание</span>
          <textarea value={data.description || ''} onChange={handleChange} className="form__textarea" type="text" name="description" required minLength="2" maxLength="500" />
      </div>
      <div className="form__input-container">
        <span className="form__input-name">Операционная система</span>
        <select value={data.operatingSystem || ''} onChange={handleChange} className="form__select" name="operatingSystem">
          <option value="Android">Android</option>
          <option value="iOS">iOS</option>
          <option value="другая">другая</option>
        </select>
      </div>
      <div className="form__input-container">
        <span className="form__input-name">Состояние телефона</span>
        <select value={data.condition || ''} onChange={handleChange} className="form__select" name="condition">
          <option value="новый">новый</option>
          <option value="потертости">потертости</option>
          <option value="сколы">сколы</option>
          <option value="нерабочий">нерабочий</option>
        </select>
      </div>
      <div className="form__input-container">
          <span className="form__input-name">Цена</span>
          <input value={data.price || ''} onChange={handleChange} className="form__input" type="number" name="price" required minLength="1" maxLength="10" />
      </div>
      <div className="form__info-container">
        { visibleInfo ? <p className="form__info">Телефон успешно добавлен!</p> : '' }
      </div>
      <button disabled={!valid} type="submit" className={submitButtonClassName} >Добавить телефон</button>
    </form>
  );
}

export default Form;
