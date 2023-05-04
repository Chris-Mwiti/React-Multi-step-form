import { useState } from 'react'
import './App.css'
import Navbar from '../components/navbar';
import Form from '../components/form';

function App() {
  const [currIndex, setCurrIndex] = useState(0);

  return (
    <div className='container-wrapper'>
      <div className='form-container'>
        <Navbar currIndex={currIndex} />
        <Form currIndex={currIndex} setCurrIndex={setCurrIndex}/>
      </div>
    </div>
  )
}

export default App
