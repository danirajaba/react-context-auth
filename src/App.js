import React from 'react';
import Routes from './routes/index';
import AuthProvider from './store/Providers/AuthProvider';


const App = () => {


  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
