import React from 'react';

function Header() {
    return (
        <div id="header">
            <nav className="navbar navbar-expand-lg navbar-light" style={{background: '#1488cc'}}>
            <a className="navbar-brand" href="/react-combo">React-Combo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/cards">Project 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/calculator">Project 2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/github">Project 3</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/music">Project 4</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/notes">Project 5</a>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default  Header;