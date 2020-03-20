import React from 'react';

import logo from './assets/logo-solusoft.png'
import './styles.css'

function App() {
  return (
    <div className='container'>
      <header className='d-flex justify-content-center'>
        <img src={logo} alt="" />
      </header>
      <div className="horizontal-line"></div>
      <main className='d-flex justify-content-center'>
        <div className='text-center'>
          <h5>(+244) 948145100 | geral@solusoft.co.ao</h5>
          <h5>Talatona - Luanda, Angola</h5>
        </div>
      </main>
      <footer>
        <h1 className="text-center under-text">Under Review</h1>
      </footer>
    </div >
  );
}

export default App;
