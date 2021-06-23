//import logo from './logo.svg';
import './App.css';
import GetCompaniesComponent from './Components/Manage Companies/GetCompaniesComponent'
import AddCompany from './Components/Manage Companies/AddCompany';
import NavbarComponent from './Components/Navbar'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import UpdateCompany from './Components/Manage Companies/UpdateCompany';
import GetSectors from './Components/Manage Sectors/GetSectors';
import AddSector from './Components/Manage Sectors/AddSectors';
import ImportData from './Components/Import Data/ImportData';
import GetStockExchanges from './Components/Manage Stock Exchanges/GetStockExchange';
import AddStockExchange from './Components/Manage Stock Exchanges/AddStockExchange';

function App(){
  return(
    <div className="App">
      <NavbarComponent />
      <Router>
        <Route path='/' component={Home} exact/>
        <Route path="/addCompany" component={AddCompany} exact/>
        <Route path="/companies" component={GetCompaniesComponent} exact/>
        <Route path="/updateCompany/:id" component={UpdateCompany} />
        <Route path="/sectors" component={GetSectors} exact />
        <Route path="/addSector" component={AddSector} exact />
        <Route path="/importData" component={ImportData} exact />
        <Route path="/stockExchanges" component={GetStockExchanges} exact />
        <Route path="/addStockExchange" component={AddStockExchange} exact />

      </Router>
    </div>
  );
}

export default App;