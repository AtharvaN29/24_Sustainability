import './App.css'
import { ThemeProvider } from './components/ui/themeprovider'
import Analytics from './mycomponents/Analytics'
import Home from './mycomponents/Home'
import PowerPrediction from './mycomponents/PowerPrediction'
import StabilityPrediction from './mycomponents/StabilityPrediction'
import Footer from './mycomponents/footer'
import Landingpag from './mycomponents/landingpag'
import Navbar from './mycomponents/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
    <ThemeProvider>
    <Router>
      <Navbar />
      <Routes>
      <Route exact path = '/home' element={<Home/>}/>
      <Route exact path = '/' element={<Landingpag/>}/>
        <Route exact path = '/powerPrediction' element={<PowerPrediction/>}/>
        <Route exact path = '/analytics' element={<Analytics/>}/>
        <Route exact path = '/stabilityPrediction' element={<StabilityPrediction/>}/>
        <Route exact path = '/powerPrediction' element={<PowerPrediction/>}/>
      </Routes>
      <Footer/>

    </Router>
    </ThemeProvider>
    
    </>  

  )
}

export default App
