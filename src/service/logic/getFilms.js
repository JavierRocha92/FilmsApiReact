import {APIKEY} from './constants.js'
export const getFilms =  (titleFilm = false) => {
    let title = (titleFilm) ? titleFilm : 'cars'
    title = title.replace(' ','%20')
    const url = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${title}`
    return fetch(url).then(data => data.json()).then(json => json.Search)
}
