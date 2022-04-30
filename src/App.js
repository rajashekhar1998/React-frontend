import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListBooksComponent from './components/ListBooksComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBookComponent from './components/CreateBookComponent';

function App() {
  return (
    <div>
       <Router>
        
          <HeaderComponent />
            <div className="container">
              <Routes> 
                <Route path="/" exact element = {<ListBooksComponent/>} />
                <Route path="/Books" element = {<ListBooksComponent/>} />
                <Route path="/add-Books" exact element = {<CreateBookComponent />} />
              </Routes>
            </div>
          <FooterComponent />
        
      </Router>
    </div>
  );
}

export default App;
