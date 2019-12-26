import React, {useEffect} from 'react';
import {ListGroupItem, Button} from "reactstrap";
import {addMovie, removeMovie} from "../actions/index";

const MovieItem = ({movie, dispatch, movieLibrary}) => {

	useEffect(() => {

	}, []);

	const addMovieDispatch = (movie) => {
		dispatch(addMovie(movie));
	};

	const removeMovieDispatch = (movieID) => {
		dispatch(removeMovie(movieID));
	};

	const isMovieInLibrary = (movieID) => {

		return movieLibrary.filter(function(e) {
			// Return "true" se è nella libreria
			return e.imdbID === movieID;
		}).length > 0; // con length la funzione filter torna true o false

	};

	return (
		<ListGroupItem className="justify-content-between align-items-center d-flex" action>
			<span>{movie.Title} - <em className="text-muted">{movie.Year}</em></span>
			<span>
				{
					isMovieInLibrary(movie.imdbID) ? (
						<Button onClick={() => removeMovieDispatch(movie.imdbID)} size="sm" color="danger">Remove from watchlist</Button>
					) : (
						<Button onClick={() => addMovieDispatch(movie)} size="sm" color="primary">Add to watchlist</Button>
					)
				}
			</span>
		</ListGroupItem>
	);

};

export default MovieItem;
