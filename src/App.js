// App.js
import React from 'react';
import Navbar from './view/Navbar';
import Homepage from './view/Homepage';
import './css/App.css'; // Import the CSS file
import BDOCulture from './view/BDOCulture';
import BDOTechnology from './view/BDOTechnology';
import ThisSite from './view/ThisSite';

function App() {
    let Component
    switch (window.location.pathname) {
        case "/Home":
            Component = Homepage
            break
        case "/BDOCulture":
            Component = BDOCulture
            break
        case "/BDOTechnology":
            Component = BDOTechnology
            break
        case "/ThisSite":
            Component = ThisSite
            break
        default:
            Component = Homepage
    }


    return (
        <div>
            <Navbar />
            <Component />
        </div>
    );
}

export default App;
