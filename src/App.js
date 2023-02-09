
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Chatroom from './pages/ChatRoom';
import Dashboard from './pages/Dashboard';
import Company from './pages/Company';

import Progress from './pages/Progress';
import Settings from './pages/Settings.';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CollapsibleExample from './components/CollapsibleExample';


function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <CollapsibleExample /> */}
        <Sidebar>
          <Routes>
            <Route path="/progress" element={<Progress />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chatRoom" element={<Chatroom />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/company" element={<Company />} />



          </Routes>
        </Sidebar>
      </BrowserRouter>

    </div>
  );
}

export default App;
