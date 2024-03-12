import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App.jsx';





export default function Root() {

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);