import React, {useEffect} from 'react';
import {ListGroupItem, Button} from "reactstrap";
import {addMovie, removeMovie} from "../actions/index";

const MovieItem = ({movie, dispatch}) => {

	useEffect(() => {

	}, []);

	const addMovieDispatch = (movie) => {
		dispatch(addMovie(movie));
	};

	const removeMovieDispatch = (movieID) => {
		dispatch(removeMovie(movieID));
	};

	return (
		<ListGroupItem className="justify-content-between align-items-center d-flex" action>
			<span>{movie.Title} - <em className="text-muted">{movie.Year}</em></span>
			<span>
				<Button onClick={() => addMovieDispatch(movie)} size="sm">Add to watchlist</Button>
				{/*<Button onClick={() => removeMovieDispatch(movie.imdbID)} size="sm">Remove from watchlist</Button>*/}
			</span>
		</ListGroupItem>
	);

};

export default MovieItem;
