import React from 'react';
import RouterApp from './routers/RouterApp'
import './App.css';
import CartProvider from './components/ContexProvider/CartProvider';
import FirebaseProvider from './components/ContexProvider/FirebaseProvider';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <FirebaseProvider>
          <RouterApp />
        </FirebaseProvider>
      </CartProvider>
    </div>
  );
}

export default App;
