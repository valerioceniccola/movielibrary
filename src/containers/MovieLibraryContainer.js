import {connect} from 'react-redux';
import MovieLibrary from "../components/MovieLibrary";

// Scelgo gli stati dallo store che mi servono per il componente
const mapStateToProps = (state) => {
	return {
		// Destrutturo l'array per passare una copia e non l'array originale
		movieLibrary: [...state.movieLibrary]
	}
};

export default connect(mapStateToProps)(MovieLibrary);