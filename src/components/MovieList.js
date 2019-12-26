import React, {useEffect, useState} from 'react';
import {ListGroup, Alert} from "reactstrap";
import API from "../api";
import SearchMovie from "./SearchMovie";
import MovieItemContainer from "../containers/MovieItemContainer";

const MovieList = () => {

	// Movies
	const [movies, setMovies] = useState([]);
	const [movieString, setMovieString] = useState('');
	const defaultMovie = 'Star Wars';

	// ComponentDidMount equivalent
	useEffect(() => {

		searchMovie(defaultMovie);

	}, []);

	const searchMovie = (movie = '') => {

		// Ombd set
		const omdbKey = 'e5388ceb';
		const omdbUrl = '?i=tt3896198&apikey=' + omdbKey + '&s=' + movie;

		API.get(omdbUrl)
			.then(res => {
				setMovies(res.data.Search);
			})
			.catch(err => console.log(err))

	};

	const onChangeInput = (movieString) => {

		if (movieString.length > 3) {

			// Effettuo la ricerca con la nuova stringa
			searchMovie(movieString);

			// Mi salvo la stringa come stato per poterla visualizzare
			setMovieString(movieString);

		}

	};

	return (
		<>
			<SearchMovie onChangeInputChild={(movieString) => onChangeInput(movieString)} />
			{
				// Se l'array è stato valorizzato, ciclo i risultati con il componente "MovieItem"
				movies ? (
					<ListGroup>
						{movies.map((movie, i) => <MovieItemContainer key={i} movie={movie} />)}
					</ListGroup>
				) : (
					<Alert color="danger">
						No movie found with key <strong>{movieString}</strong>
					</Alert>
				)
			}
		</>
	);

};

export default MovieList;
