import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top py-0">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#s9xnavbar" aria-controls="s9xnavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink to="/" className="navbar-brand d-flex align-items-center py-3 px-0 px-md-3 mx-auto">
                    <img src="\assets\images\icons\squad9.png" alt="Squad 9 Warhawk"  className="navbar-brand-logo mr-2" />
                    <span className="d-none d-md-block">Squad 9</span>
                </NavLink>
                <button className="music-player px-3 d-md-none" onclick="playPause()">
                    <div id="playPauseSmall" className="play"></div>
                </button>

                <div className="collapse navbar-collapse" id="s9xnavbar">
                    <div className="navbar-nav">
                        <NavLink to="/team" className="nav-link px-3 py-3">Team</NavLink>
                        <NavLink to="/history" className="nav-link px-3 py-3">History</NavLink>
                        <NavLink to="/wiki" className="nav-link px-3 py-3">Wiki</NavLink>
                        <a href="https://soardogg.com/vendors/squad-9/" target="_blank" rel="noreferrer" className="nav-link px-3 py-3">Store</a>
                        <NavLink to="/join" className="nav-link px-3 py-3">Join</NavLink>
                    </div>
                    <span className="navbar-nav ml-auto">
                        <button className="music-player px-3 py-3 d-none d-sm-block" onclick="playPause()">
                            <div id="playPause" className="play"></div>
                        </button>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;