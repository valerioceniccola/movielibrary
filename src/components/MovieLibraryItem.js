import React, {useEffect, useState} from 'react';
import {Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button} from "reactstrap";
import {removeMovie, toggleMarkAsWatched} from "../actions";

const MovieLibraryItem = ({movie, dispatch}) => {

	const [isMovieWatched, setIsMovieWatched] = useState(movie.watched);

	useEffect(() => {

	}, []);

	const removeMovieDispatch = (movieID) => {
		dispatch(removeMovie(movieID))
	};

	const toggleMarkAsWatchedDispatch = (movieID) => {

		// Invio la dispatch
		dispatch(toggleMarkAsWatched(movieID));

		// Aggiorno lo stato per il toggle Watch / unwatch
		setIsMovieWatched(prevState => {
			return !prevState
		})

	};

	return (
		<Col xs="3">
			<Card>

				<CardImg top width="100%" src={movie.movieObj.Poster} />

				<CardBody>

					<CardTitle>{movie.movieObj.Title}</CardTitle>

					<CardSubtitle><small><strong>{movie.movieObj.Year}</strong></small></CardSubtitle>

					<div className="mt-2">

						<Button color="danger" size="sm" className="mr-1" onClick={() => removeMovieDispatch(movie.movieObj.imdbID)}>Remove</Button>

						<Button color={isMovieWatched ? 'success' : 'secondary'} size="sm" onClick={() => toggleMarkAsWatchedDispatch(movie.movieObj.imdbID)}>
							{ isMovieWatched ? 'Watched' : 'Mark as watched' }
						</Button>

					</div>

				</CardBody>
			</Card>
		</Col>
	);

};

export default MovieLibraryItem;
