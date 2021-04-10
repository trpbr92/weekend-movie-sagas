import {HashRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import AddMovie from '../AddMovie/AddMovie';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/MovieDetails" exact>
          <MovieDetails />
        </Route>
        
        <Route path="/AddMovie" exact>
          <AddMovie />
        </Route>
        
        <Link to ='/AddMovie'>
         <button>Add Movie</button>
        </Link>

        {/* Details page */}

        {/* Add Movie page */}
      </Router>
    
    </div>
  );
}


export default App;
