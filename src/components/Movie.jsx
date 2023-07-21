import React from 'react'

const Movie = ({ Poster, Title, Type, Year }) => {
	return (
		<div className='movie'>
			<div className='movie-img'>
				{Poster === 'N/A' ? (
					<img src={`https://placehold.co/310x400?text=${Title}`} alt={Title} />
				) : (
					<img className='img' src={Poster} alt={Title} />
				)}
			</div>
			<div className='movie-bottom'>
				<span className='movie-title'>{Title}</span>
				<div className='subtitle-item'>
					<span className='movie-subtitle'>{Type}</span>
					<span className='movie-subtitle'>{Year}</span>
				</div>
			</div>
		</div>
	)
}

export default Movie
