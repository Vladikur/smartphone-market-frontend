export const BASE_URL = 'http://localhost:3000';

const checkResponse = (response) => {
    return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.statusText}`);
}

export const getContent = () => {
    return fetch(`${BASE_URL}/smartphons`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(checkResponse);
};

export const addSmartphone = (smartphone) => {
  return fetch(`${BASE_URL}/smartphons`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(smartphone)
  })
  .then(checkResponse)
}

export const deleteSmartphone = (id) => {
  return fetch(`${BASE_URL}/smartphons/${id}`, {
    method: 'DELETE',
  })
  .then(checkResponse)
}