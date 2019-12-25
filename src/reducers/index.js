export default function storeReducer(state = {}, action) {

	switch(action.type) {

		case 'ADD_MOVIE' :
			return {
				movieLibrary: [
					action.movie,
					...state.movieLibrary
				]
			};

		case 'REMOVE_MOVIE' :

			// Rimuovo da movieLibrary solo l'oggetto con l'imdbID richiesto
			let libraryFiltered = state.movieLibrary.filter(function(e) {
				return e.imdbID !== action.movieID;
			});

			return {
				movieLibrary: [
					...libraryFiltered
				]
			};

		default :

			return {...state}

	}

}