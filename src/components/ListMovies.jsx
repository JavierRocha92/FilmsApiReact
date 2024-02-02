/* eslint-disable react/prop-types */
import { Movie } from "./Movie";

export const ListMovies = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          image={movie.Poster}
        />
      ))}
    </>
  );
};
