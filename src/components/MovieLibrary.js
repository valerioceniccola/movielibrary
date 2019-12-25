import React, {useEffect, useState} from 'react';
import {Row, Col} from "reactstrap";
import MovieLibraryItemContainer from "../containers/MovieLibraryItemContainer";

const MovieLibrary = ({movieLibrary}) => {

	useEffect(() => {

	}, []);

	return (
		<>
			<Row className="mb-3">
				<Col>
					<h2>My library</h2>
				</Col>
			</Row>

			<Row>
				{movieLibrary.map((movie, i) => <MovieLibraryItemContainer key={i} movie={movie} />)}
			</Row>
		</>
	);

};

export default MovieLibrary;
