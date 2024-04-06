import './App.css'
import Home from './mycomponents/Home'
import PowerPrediction from './mycomponents/PowerPrediction'
import Footer from './mycomponents/footer'
import Navbar from './mycomponents/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/powerPrediction' element={<PowerPrediction />} />
          <Route exact path='/analytics' element={<PowerPrediction />} />
          <Route
            exact
            path='/stabilityPrediction'
            element={<PowerPrediction />}
          />
          <Route exact path='/powerPrediction' element={<PowerPrediction />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
