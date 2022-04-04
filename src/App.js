import React,{ useState } from 'react';

import './App.css'
import Navbar from './components/Sidebar/Navbar';
function App() {
  const [openNavbar, setOpenNavbar] = useState(true)
  return (
    <div className="App">
         <div className='container-flex'>
            <div className={openNavbar?'set-with-navbar':'set-with-navbar open'}><Navbar
                openNavbar={openNavbar}
                setOpenNavbar={setOpenNavbar}/>
            </div>
                 <div className={openNavbar?'set-with-router':'set-with-router-open'}>Cc</div>
            </div>
    </div>
  );
}

export default App;
