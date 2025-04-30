import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="page-content">
        <Navbar/>
        <h1>GATECH</h1>
      </div>
   
        
      <Footer />
    </>
  )
}

export default App
