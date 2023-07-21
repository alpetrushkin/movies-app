import { Component } from 'react'
import Movies from '../components/Movies.jsx'
import movies from '../components/Movies.jsx'

class Main extends Component {
	state = {
		movies: []
	}

	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=7d868b11&s=matrix')
			.then(response => response.json())
			.then(data => this.setState({ movies: data.Search }))
	}

	render() {
		return (
			<div className='container'>
				{movies.length ? (
					<Movies movies={this.state.movies} />
				) : (
					<h3>Loading...</h3>
				)}
			</div>
		)
	}
}
export default Main
