import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Signin from './components/login.js';
import { GoogleOAuthProvider } from '@react-oauth/google';
import * as serviceWorker from './serviceWorker';
import Header from './components/header.js';
import ProductList from './components/ProductList.js';
import Portfolio from './components/portfolio.js';

const clientId = '398891135650-bfi8tetpvu5j21tf87t2mb30oa841isf.apps.googleusercontent.com'; // Reemplaza esto con tu Client ID de Google

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

serviceWorker.unregister();
// App.js (o cualquier componente de nivel superior)


