import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <>
    <div className='flex flex-row'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Navbar />
        <Dashboard />
      </div>
    </div>
    </>
  );
}

export default App;
