import {constant} from './constant.js'
export const getFilms =  (titleFilm = false) => {
    let title = (titleFilm) ? titleFilm : 'cars'
    title = title.replace(' ','%20')
    const url = `https://www.omdbapi.com/?t=${title}&apikey=${constant.APIKEY}`
    return fetch(url).then(data => data.json())
    
}
