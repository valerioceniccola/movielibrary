import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavbarDef from "./components/Navbar";
import MovieList from "./components/MovieList";
import MovieLibraryContainer from "./containers/MovieLibraryContainer";

const App = () => {

	// Equivalente di ComponentDidMount
	useEffect(() => {

	}, []);

	return (
		<div className="App">

			<NavbarDef />

			<Container className="mt-4 mb-5">

				<Row className="mb-5">
					<Col>
						<MovieLibraryContainer />
					</Col>
				</Row>

				<Row>
					<Col>
						<MovieList />
					</Col>
				</Row>

			</Container>

		</div>
	);

};

export default App;

// todo notifiche, segna come visto, routing