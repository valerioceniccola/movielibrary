export const addMovie = (movie) => {

	return {
		type: 'ADD_MOVIE',
		movie
	}

};

export const removeMovie = (movieID) => {

	return {
		type: 'REMOVE_MOVIE',
		movieID: movieID
	}

};