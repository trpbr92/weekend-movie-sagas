import {HashRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import AddMovie from '../AddMovie/AddMovie';
import MovieDetails from '../MovieDetails/MovieDetails';
import {useState} from 'react';

function App() {
  const [detail, setDetail] = useState({});
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList setDetail = {setDetail}/>
        </Route>

        <Route path="/MovieDetails/:id" render = {(props)=><MovieDetails id = {props.match.params.id}/>} exact>
        </Route>
        
        <Route path="/AddMovie" exact>
          <AddMovie />
        </Route>
     
        {/* Details page */}

        {/* Add Movie page */}
      </Router>
    
    </div>
  );
}


export default App;
