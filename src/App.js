import './App.css';
import {BrowserRouter , Route, Routes} from 'react-router-dom'
// import Head from './components/common/heading/Head'
import Header from './components/common/heading/Header';
import Home from './components/Home/Home'
import About from './components/about/About';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/about' element ={<About/>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
