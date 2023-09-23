import './App.css';
import data from "./data/data.json";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from 'react-router-dom';
import AppContainer from './components/AppContainer/AppContainer';

const App = () => {

  return (
    <div className="App">

      <NavBar />
      <Routes>
        <Route exact path="/users" element={<AppContainer data={data} />} />
      </Routes>


    </div >
  );
}

export default App;
