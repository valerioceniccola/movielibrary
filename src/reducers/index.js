export default function storeReducer(state = {}, action) {

	switch(action.type) {

		case 'ADD_MOVIE' :
			return {
				movieLibrary: [
					{
						movieObj: action.movie,
						watched: false
					},
					...state.movieLibrary
				]
			};

		case 'REMOVE_MOVIE' :

			// Rimuovo da movieLibrary solo l'oggetto con l'imdbID richiesto
			let libraryFiltered = state.movieLibrary.filter(function(e) {
				return e.movieObj.imdbID !== action.movieID;
			});

			return {
				movieLibrary: [
					...libraryFiltered
				]
			};

		case 'TOGGLE_MARK_AS_WATCHED' :

			let movieToToggleAsWatched = state.movieLibrary.filter(function(e) {
				if (e.movieObj.imdbID === action.movieID) {
					e.watched = (e.watched !== true);
				}
			});

			return {
				movieLibrary: [
					...state.movieLibrary,
					...movieToToggleAsWatched
				]
			};

		default :

			return {...state}

	}

}