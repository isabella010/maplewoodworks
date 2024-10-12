import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home"
import Youtube from './pages/Youtube';
import NavigationBar from './navbar';

function App() {

  return (
    <>
      <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/youtube" element={<Youtube />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
