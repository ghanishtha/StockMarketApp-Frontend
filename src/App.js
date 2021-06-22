//import logo from './logo.svg';
import './App.css';
import GetCompaniesComponent from './Components/GetCompaniesComponent'
import AddCompany from './Components/AddCompany';
import NavbarComponent from './Components/Navbar'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App(){
  return(
    <div className="App">
      <NavbarComponent />
      <Router>
        <Route path="/addCompany" component={AddCompany} exact/>
        <Route path="/companies" component={GetCompaniesComponent} exact/>
      </Router>
    </div>
  );
}

export default App;