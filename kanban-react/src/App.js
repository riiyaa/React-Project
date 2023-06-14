import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
    <div className='flex'>
      <Sidebar />
      <Navbar />
    </div>
    </>
  );
}

export default App;
