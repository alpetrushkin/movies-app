import { Component } from 'react'
import Movies from '../components/Movies.jsx'
import Preloader from '../components/Preloader.jsx'
import Search from '../components/Search.jsx'

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {
	state = {
		movies: [],
		loading: true
	}

	componentDidMount() {
		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
			.then(response => response.json())
			.then(data => this.setState({ movies: data.Search, loading: false }))
	}

	searchMovies = (str, type = 'all') => {
		this.setState({ loading: true })
		fetch(
			`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
				type !== 'all' ? `&type=${type}` : ''
			}`
		)
			.then(response => response.json())
			.then(data => this.setState({ movies: data.Search, loading: false }))
	}

	render() {
		return (
			<div className='container'>
				<Search searchMovies={this.searchMovies} />
				{this.state.loading ? (
					<Preloader />
				) : (
					<Movies movies={this.state.movies} />
				)}
			</div>
		)
	}
}
export default Main
