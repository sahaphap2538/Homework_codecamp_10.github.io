import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SignUp } from './component/SignUp';
import { Home } from './component/Home';
import { SignIn } from './component/SignIn';
import { CreatePikka } from './component/CreatePikka'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/create' element={<CreatePikka/>}/>
      </Routes>
    </div>
  );
}

export default App;
