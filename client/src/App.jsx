import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import Dashboard from './components/Dashboard/Dashboard'
import JobBoard from './components/JobBoard/JobBoard'
import JobDetails from './components/JobDetails'
import UpdateJob from './components/UpdateJob'
import NetworkGraph from './components/Network/NetworkGraph'
import Settings from './components/Settings/Settings'

const App = () => {
  return (
    <>
      <Router>
        <>
          <NavBar />
          <Routes>
            <Route path='/' exact element={<Dashboard />} />
            <Route path='/jobsdatabase' element={<JobBoard />} />
            <Route path='/jobsdatabase/:id/update' element={<UpdateJob />} />
            <Route path='/jobsdatabase/:id' element={<JobDetails />} />
            <Route path='/networkgraph' element={<NetworkGraph />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </>
      </Router >
    </>
  )
}

export default App