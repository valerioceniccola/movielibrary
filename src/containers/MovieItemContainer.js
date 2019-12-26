import {connect} from 'react-redux';
import MovieItem from "../components/MovieItem";

const mapStateToProps = (state) => {
	return {
		movieLibrary: [...state.movieLibrary]
	}
};

// Uso solo il connect se devo effettuare solo i dispatch
export default connect(mapStateToProps)(MovieItem);