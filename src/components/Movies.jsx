import React from 'react'
import Movie from './Movie.jsx'

const Movies = ({ movies }) => {
	return (
		<div className='movies'>
			{movies.map(movie => (
				<Movie key={movie.id} {...movie} />
			))}
		</div>
	)
}

export default Movies
