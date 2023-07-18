import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard';
import Leaves from './components/Leaves';
import ApplyLeaves from './components/ApplyLeaves';
import CheckLeaveBalance from './components/CheckLeaveBalance';
import CasualBalance from './components/CasualBalance';
import EarnedBalance from './components/EarnedBalance';

function App() {
  return (
    <div className="content-wrap">
      <BrowserRouter>
        <nav>
          <Link className="navbar-brand" to="dashboard">
            Dashboard
          </Link>
          <Link className="navbar-brand" to="leaves">
            Leaves
          </Link>
        </nav>

        <Routes>
          {/* Parent Navigation Routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaves" element={<Leaves />}>
            {/* 2nd Level Navigation Routes */}
            <Route path="/leaves" element={<ApplyLeaves />} />
            <Route path="apply-leaves" element={<ApplyLeaves />} />
            <Route path="check-leave-balance" element={<CheckLeaveBalance />}>
              {/* 3rd Level Navigation Routes */}
              <Route
                path="/leaves/check-leave-balance"
                element={<CasualBalance />}
              />
              <Route path="casual-balance" element={<CasualBalance />} />
              <Route path="earned-balance" element={<EarnedBalance />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
