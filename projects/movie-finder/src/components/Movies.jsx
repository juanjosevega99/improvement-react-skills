// TODO: review this function
function ListOfMovies () {
  return (
    <ul>
      xd
    </ul>
  )
}

function NoMovies () {
  return (
    <p>No movies found for this search</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies ? <ListOfMovies /> : <NoMovies />
  )
}
