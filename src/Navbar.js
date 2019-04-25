import React from 'react';

const Navbar = (props) => {
    const today = new Date().toLocaleDateString("en-GB");
    return (
        <div>
            <nav>
                <h3>Weather on {today}</h3>
            </nav>
        </div>
    );
}
 
export default Navbar
