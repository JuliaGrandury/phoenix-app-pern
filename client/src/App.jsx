import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import Dashboard from './components/Dashboard/Dashboard'
import JobBoard from './components/JobBoard/JobBoard'
import JobDetails from './components/JobDetails'
import UpdateJob from './components/UpdateJob'
import NetworkGraph from './components/Network/NetworkGraph'
import Settings from './components/Settings/Settings'
import NotFound from './components/Shared/NotFound'

const App = () => {
  return (
    <>
      <Router>
        <>
          <NavBar />
          <Routes>
            <Route path='/' exact element={<Dashboard />} />
            <Route path='/jobboard' element={<JobBoard />} />
            <Route path='/jobboard/:id/update' element={<UpdateJob />} />
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