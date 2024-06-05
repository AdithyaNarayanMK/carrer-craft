import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/mainComponents/LandingPageC';
import DetailsPageC from './components/mainComponents/DetailsPageC';
import JobsPage from './components/mainComponents/JobsPage';
import JobDescription from './components/mainComponents/JobDescription';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<LandingPage/>} />
          <Route path="/users" element={<DetailsPageC/>} />
          <Route path="/jobs" element={<JobsPage/>} />
          <Route path="/jobDescription" element={<JobDescription/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
