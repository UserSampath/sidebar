
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Chatroom from './pages/ChatRoom';
import Dashboard from './pages/Dashboard';
import Progress from './pages/Progress';
import Settings from './pages/Settings.';


function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Sidebar>
        <Routes>
            <Route path="/progress" element={<Progress/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/chatRoom" element={<Chatroom/>} />
          <Route path="/settings" element={<Settings/>} />


          </Routes>
          </Sidebar>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
