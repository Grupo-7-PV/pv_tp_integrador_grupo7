import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header'; 

function App() {
    return (
        <>
            <Header />
            <main>
                <Outlet /> 
            </main>
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