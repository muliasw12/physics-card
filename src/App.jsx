import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import MaxwellEquation from './components/maxwell-equation'
import Navbar from './components/navbar'
import Home from './components/home';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maxwell-equation" element={<MaxwellEquation />} />
      </Routes>
    </Router>
  )
}

export default App
