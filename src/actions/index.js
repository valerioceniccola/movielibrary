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

export const toggleMarkAsWatched = (movieID) => {

	return {
		type: 'TOGGLE_MARK_AS_WATCHED',
		movieID: movieID
	}

};