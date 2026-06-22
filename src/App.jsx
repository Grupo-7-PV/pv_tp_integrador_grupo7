import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header'; 
import Footer from './components/layout/Footer.jsx';

function App() {
    return (
        <>
            <Header />
            <main>
                
                <Outlet /> 
            </main>
            <Footer />
        </>
    );
}

export default App; 
/*
import { useState } from 'react'

import Login from './views/Login.jsx';


function App() {
    return (
        <Login />
    );
}

export default App;
 
*/