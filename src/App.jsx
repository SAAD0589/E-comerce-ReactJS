import { useEffect, useState } from 'react'
import Sidenav from './components/Sidenav'
import Index from './components/Index'
import Men from './components/Men'
import Woman from './components/Woman'
import Kids from './components/Kids'
import { Route, Routes } from 'react-router-dom';
import Details from './components/Details'
import Panier from './components/Panier'
import AboutPage from './components/AboutPage'
import Preloader from './components/Preloader'
import AllProduct from './components/AllProduct'
import Footers from './components/Footers'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    
    {isLoading ? (
        // Render your Preloader component here
        <Preloader />
      ) :<> 
      <Sidenav/>
    <Routes>

 
      
        <Route path="/" element={<Index/>}  />
      
    
    <Route path="/Men" element={<Men />} />
    <Route path="/Woman" element={<Woman />} />
    <Route path="/Kids" element={<Kids />} />
    <Route path="/:id/:type" element={<Details />} />
    <Route path="/Panier" element={<Panier />} />
    <Route path="/AboutPage" element={<AboutPage />} />
    <Route path="/Product" element={<><AllProduct /> <Footers/></>} />
    
  </Routes></>
}
    </>
  )
}

export default App
