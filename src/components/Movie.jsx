/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export const Movie = ({title, year, image}) => {
  return (
    <article className="article">
      <h2 className="title">{title}</h2>
      <div className="movie__data">
        <p className="year">{year}</p>
      </div>
      <div className="movie__poster">
        <img src={image} alt="" />
      </div>
    </article>
  )
}
