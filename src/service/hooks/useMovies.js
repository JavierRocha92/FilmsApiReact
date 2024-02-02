/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { getFilms } from "../logic/getFilms";

export const useMovies = () => {
    console.log('Entro')
    const [movies, setMovies] = useState(null)

    // eslint-disable-next-line no-unused-vars
    const getNewFilm =  (title = false) => {
        
        getFilms(title).then(films => setMovies(films))
    }
    useEffect(() => getNewFilm(),[])

    return [movies, getNewFilm]
}