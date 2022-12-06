import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Dashboard from './components/Dashboard/Dashboard'
import JobBoard from './components/JobBoard/JobBoard'
import NetworkGraph from './components/NetworkGraph/NetworkGraph'
import Settings from './components/Settings/Settings'
import NavBar from './components/Shared/NavBar'

function App() {
  return (
    <>
      <Router>
        <div className='appcontainer'>
          <NavBar />
          <Routes>
            <Route path='/' exact element={<Dashboard />} />
            <Route path='/jobboard' element={<JobBoard />} />
            <Route path='/networkgraph' element={<NetworkGraph />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </Router >
    </>
  );
}

export default App;
