import React from 'react';

import CircularProgress from './CircularProgress';

const Preloader = () => (
    <div className="preloader">
        {/* <img src={logo} /> */}
        <div>
        <h1 style={{color:'BLACK'}}>MOBSHOPPE</h1>
        </div>
        <CircularProgress />
    </div>
);

export default Preloader;
