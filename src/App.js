import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './screens/Header.js'
import PortfolioRoutes from './Routes/portfolioRoutes.js';

function App() {
  return (   
    <div>     
      <Header />     
      <PortfolioRoutes />
    </div> 
  );
}

export default App;
