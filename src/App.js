import Main from './components/MainComponent'
import Login from './views/Login'
import Translations from './views/Translations'
import Profile from './views/Profile'
import Header from './components/HeaderComponent';
import './css/App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'


function App() {


  return (
      <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path='/' element={ <Login /> } />
              <Route path='/translations' element={ <Translations /> } />
              <Route path='/profile' element={ <Profile /> } />
            </Routes>
          </div>
      </BrowserRouter>
    );
}

export default App;

