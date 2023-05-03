import './App.css';
import HomePage from './components/static/HomePage';
import NavBar from './components/navigation/NavBar';
import LoginPage from './components/navigation/LoginPage';
import SignupPage from './components/navigation/SignupPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <HomePage/>
      </Router>
    </div>
  );
}

export default App;
