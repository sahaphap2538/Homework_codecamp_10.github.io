import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './component/Home';
import { Pikka } from './component/Pikka';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pikka' element={<Pikka/>}/>
      </Routes>
    </div>
  );
}

export default App;
