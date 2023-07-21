import React from 'react'

const Movie = ({ Poster, Title, Type, Year }) => {
	return (
		<div className='movie'>
			<div className='movie-img'>
				<img className='img' src={Poster} />
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
