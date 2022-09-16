
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Main from './components/MainComponent'
import Login from './views/Login'
import Orders from './views/Orders'
import Profile from './views/Profile'
import Header from './components/HeaderComponent';



function App() {


  return (
    <BrowserRouter>
        <div className="App">
        <Header></Header>
          <Routes>
            <Route path='/' element={ <Login /> } />
            <Route path='/orders' element={ <Orders /> } />
            <Route path='/profile' element={ <Profile /> } />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

