import {connect} from 'react-redux';
import MovieItem from "../components/MovieItem";

// Uso solo il connect se devo effettuare solo i dispatch
export default connect()(MovieItem);