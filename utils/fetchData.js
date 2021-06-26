const API_URL = 'https://api.punkapi.com/v2/beers'

export async function getAllBeers() {
  return await fetch(API_URL)
    .then((res) => res.json())
    .then((data) => data)
}

export async function getBeerById(id) {
  return await fetch(API_URL + `/${id}`)
    .then((res) => res.json())
    .then((data) => data)
}
