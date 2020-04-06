import React from 'react';

function HomeContent() {
    return (
        <div id="projects">
            <center>
            <div className="card" style={{width: '18rem',margin:'3%'}}>
                <img src={require('../cards.png')} width="318" height="180" className="card-img-top" alt="..."/>
                <div className="card-body" style={{background:'#1488cc',color:'#fff'}}>
                    <h5 className="card-title">Cards Project</h5>
                    <p className="card-text">This project creates your profile card based on your input</p>
                    <a href="/cards" className="btn" style={{background:'#fff'}}>Project 1</a>
                </div>
            </div> 
            <div className="card" style={{width: '18rem',margin:'3%'}}>
                <img src={require('../calculator.png')} width="318" height="180" className="card-img-top" alt="..."/>
                <div className="card-body" style={{background:'red',color:'#fff'}}>
                    <h5 className="card-title">Calculator Project</h5>
                    <p className="card-text">This project has a simple calculator created using react js.</p>
                    <a href="/calculator" className="btn" style={{background:'#fff'}}>Project 2</a>
                </div>
            </div> 
            <div className="card" style={{width: '18rem',margin:'3%'}}>
                <img src={require('../github.png')} width="318" height="180" className="card-img-top" alt="..."/>
                <div className="card-body" style={{background:'green',color:'#fff'}}>
                    <h5 className="card-title">Github Api Project</h5>
                    <p className="card-text">This is a simple github users project created using api.</p>
                    <a href="/github" className="btn" style={{background:'#fff'}}>Project 3</a>
                </div>
            </div> 
            <div className="card" style={{width: '18rem',margin:'3%'}}>
                <img src={require('../music.png')} width="318" height="180" className="card-img-top" alt="..."/>
                <div className="card-body" style={{background:'#ff0066',color:'#fff'}}>
                    <h5 className="card-title">Music Player Project</h5>
                    <p className="card-text">This is a music player which playes your uploaded music.</p>
                    <a href="/music" className="btn" style={{background:'#fff'}}>Project 4</a>
                </div>
            </div> 
            <div className="card" style={{width: '18rem'}}>
                <img src={require('../notes.jpeg')} width="318" height="180" className="card-img-top" alt="..."/>
                <div className="card-body" style={{background:'#333',color:'#fff'}}>
                    <h5 className="card-title">Notes Maker Project</h5>
                    <p className="card-text">Here you can make notes by choosing title & colors.</p>
                    <a href="/notes" className="btn" style={{background:'#fff'}}>Project 5</a>
                </div>
            </div> 
            </center>
        </div>
    )
}

export default HomeContent;
