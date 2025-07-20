import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import CourseDetails from './components/CourseDetails'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curso/:courseId" element={<CourseDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
