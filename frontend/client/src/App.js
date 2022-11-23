import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Dashboard from './components/Dashboard/Dashboard'
import JobBoard from './components/JobBoard/JobBoard'
import NetworkGraph from './components/NetworkGraph/NetworkGraph'
import SideBar from './components/SideBar'

function App() {
  return (
    <>
      <Router>
        <div className='appcontainer'>
          <SideBar />
          <Routes>
            <Route path='/' exact element={<Dashboard />} />
            <Route path='/jobboard' element={<JobBoard />} />
            <Route path='/networkgraph' element={<NetworkGraph />} />
          </Routes>
        </div>
      </Router >
    </>
  );
}

export default App;
