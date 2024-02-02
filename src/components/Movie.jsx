/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export const Movie = ({title, year, runtime, image}) => {
  return (
    <div className="movie">
      <h2 className="title">{title}</h2>
      <div className="movie__data">
        <p className="year">{year}</p>
        <p className="runtime">{runtime}</p>
      </div>
      <div className="movie__poster">
        <img src={image} alt="" />
      </div>
    </div>
  )
}
