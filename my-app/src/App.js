// App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GameDescription from './components/GameDescription';

function App() {
  return (
    <div>
      <Header />
      <main>
        <GameDescription />
      </main>
      <Footer />
    </div>
  );
}

export default App;
