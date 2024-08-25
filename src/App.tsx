import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from "./components/Home";
import Instagram from './components/Instagram';

const App = () =>{
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/instagram' element={Instagram}></Route>
      </Routes>
    </Router>
  )
}

export default App
