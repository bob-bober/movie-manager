import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import ContextProvider from './Context';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <HomePage /> 
      </ContextProvider>
      
      <Routes>
        <Route />
      </Routes>

    </div>
  );
}

export default App;
