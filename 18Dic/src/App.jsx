import './App.css'
import {Routes} from 'react-router-dom';
import MainLayout from './layout/MainLayout';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}></Route><Route/>
      </Routes>
    </>
  )
}

export default App
