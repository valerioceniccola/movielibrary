import React, {useEffect} from 'react';
import {Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button} from "reactstrap";
import {removeMovie} from "../actions";

const MovieLibraryItem = ({movie, dispatch}) => {

	useEffect(() => {

	}, []);

	const removeMovieDispatch = (imdbID) => {

		dispatch(removeMovie(imdbID))

	};

	return (
		<Col xs="3">
			<Card>
				<CardImg top width="100%" src={movie.Poster} />
				<CardBody>
					<CardTitle>{movie.Title}</CardTitle>
					<CardSubtitle><small><strong>{movie.Year}</strong></small></CardSubtitle>
					<Button color="danger" className="mt-2" size="sm" onClick={() => removeMovieDispatch(movie.imdbID)}>Remove</Button>
				</CardBody>
			</Card>
		</Col>
	);

};

export default MovieLibraryItem;
