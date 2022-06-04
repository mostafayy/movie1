import React from 'react';
import './App.scss';
import{Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/pageNotFound/PageNotFound';
function App() {
  return (
    <div className="App">
<Router>

<Header></Header>
<div className='container'>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/movie/:imdbID' element={<MovieDetail/>}/>
<Route  element={<PageNotFound/>}/>
</Routes>
</div>
<Footer/>
</Router>
    </div>
  );
}

export default App;
