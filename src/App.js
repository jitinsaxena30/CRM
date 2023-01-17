
import "./App.css";
import Admin from "./Screens/AdminScreen/Admin";
import User from './Screens/UserScreen/UserComponent/User';
import HomeScreen from "./Screens/HomeScreen";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route exact path='/' element={<HomeScreen/>}/>
      <Route exact path='/user' element={<User/>}/>
      <Route exact path='/admin' element={<Admin/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
