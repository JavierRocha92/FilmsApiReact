import "./App.css";
import { useMovies } from "./service/hooks/useMovies";
import { ListMovies } from "./components/ListMovies";
import { NoMovies } from "./components/NoMovies";
import { title } from "./service/logic/constants";

function App() {
  const [movies, getNewFilm] = useMovies();
  // const title = document.getElementById("title")

  const handlerClick = () => {
    const input_title = title()
    getNewFilm(input_title.value);
  };

  return (
    <>
      <div className="container">
        <header className="header">
          <h1>Prueba tecnica OMDB</h1>
          <form action="" className="form">
            <input
              id="title"
              type="text"
              className="form__input"
              placeholder="Matrix, The Godfather..."
            />
          </form>
          <button onClick={handlerClick} className="form__button">
            Enviar
          </button>
        </header>
        <main className="main">{movies ? <ListMovies movies={movies} /> : <NoMovies/>}</main>
      </div>
    </>
  );
}

export default App;
