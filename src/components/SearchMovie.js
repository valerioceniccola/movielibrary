import React, {useEffect, useState} from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const SearchMovie = ({onChangeInputChild}) => {

	const [movieSearched, setMoviesSearched] = useState('Star Wars');

	useEffect(() => {

		onChangeInputChild(movieSearched);

	}, [movieSearched]);

	const changeInputValue = (evt) => {
		setMoviesSearched(evt.target.value)
	};

	return (
		<Form>
			<FormGroup>
				<Label for="movieName">Search movie</Label>
				<Input onChange={(evt) => {changeInputValue(evt)}} type="search" name="movieName" id="movieName" placeholder="Type a movie title" />
			</FormGroup>
		</Form>
	);

};

export default SearchMovie;
