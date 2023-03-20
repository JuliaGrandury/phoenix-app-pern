import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import Dashboard from './components/Dashboard/Dashboard'
import JobBoard from './components/JobBoard/JobBoard'
import JobDetails from './components/JobDetails'
import NetworkGraph from './components/Network/NetworkGraph'
import Settings from './components/Settings/Settings'
import NotFound from './components/Shared/NotFound'
import TestPage from './components/Shared/TestPage'

const App = () => {
  return (
    <>
      <Router>
        <>
          <NavBar />
          <Routes>
            <Route path='/' exact element={<Dashboard />} />
            <Route path='/testpage' element={<TestPage />} />
            <Route path='/jobboard' element={<JobBoard />} />
            <Route path='/jobboard/:id' element={<JobDetails />} />
            <Route path='/networkgraph' element={<NotFound />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </>
      </Router >
    </>
  )
}

export default App