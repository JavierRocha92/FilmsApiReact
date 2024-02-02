import './App.css'
import { Movie } from './components/Movie'
import { useMovies } from './service/hooks/useMovies'

function App() {

const [movie, getNewFilm] = useMovies()

const handlerClick = () => {
  const title = document.getElementById('title')
  getNewFilm(title.value)
}


  return (
    <>
    <div className="movies d-flex">
      <div className="searcher">
      <button onClick={handlerClick}>Buscar</button>
      <input required type="text" id="title" />

      </div>
    {movie && (
          <Movie key={movie.imdbID} title={movie.Title} year={movie.Year} runtime={movie.Runtime} image={movie.Poster} />
        )}
    </div>
    </>
   
  )
}

export default App
