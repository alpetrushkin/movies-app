import React from 'react'
import Movie from './Movie.jsx'

const Movies = ({ movies = [] }) => {
	return (
		<div className='movies'>
			{movies.length ? (
				movies.map(movie => <Movie key={movie.id} {...movie} />)
			) : (
				<h4>Ничего не найдено</h4>
			)}
		</div>
	)
}

export default Movies
