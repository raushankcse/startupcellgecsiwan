import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from "./components/Home";
import Instagram from './components/Instagram';
import Twitter from './components/Twitter';
import Facebook from './components/Facebook';
import Quiz from './components/Quiz';

const App = () =>{
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/instagram' element={<Instagram/>}></Route>
        <Route path='/twitter' element={<Twitter/>}></Route>
        <Route path='/facebook' element={<Facebook/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
