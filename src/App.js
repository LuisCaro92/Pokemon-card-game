import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './components/home';
import Mazo from "./components/mazo";
import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
     <Mazo/>
    </div>
  );
}

export default App;
