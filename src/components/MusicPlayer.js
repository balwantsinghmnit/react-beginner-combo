import React,{useState} from 'react';
const music = require("../music.png");
const song1= require("./song1.mp3");
const song2= require("./song2.mp3");
const song3= require("./song3.mp3");

function MusicPlayer() {
    const arr = [song1,song2,song3];
    const [btn,setBtn] = useState("Play");
    const [status,setStatus] = useState(false);
    var c=0;

    const nextSong = ()=>{
        c=(c+1)%3;
        document.getElementById("player").src=arr[c];
        play();
    }
    const prevSong = ()=>{
        c=(c-1);
        if(c<0)
        c=2;
        document.getElementById("player").src=arr[c];
        play();
    }
    const play = ()=>{
        setBtn("Pause");
        setStatus(true);
        document.getElementById("player").play();
    }
    const stop = ()=>{
        setBtn("Play");
        setStatus(false);
        document.getElementById("player").pause();
    }
    return (
        <div id="musicplayer" style={{width:'300px',margin:'auto',marginTop:'20px'}}>
            <h2 style={{
                width:'100%',
                background:'#333',
                color:'#fff',
                textAlign:'center',
                padding:'5px',
                borderTopLeftRadius:'10px',
                borderTopRightRadius:'10px'
                }}>Music Player</h2>
                <img src={music} alt="music" style={{marginTop:'-10px'}} height="300" width="100%"/><br/>
                <audio style={{display:'none'}} id="player" controls className="player" preload="false">
                    <source src={arr[c]} />
                </audio>
                <div style={{border:'1px solid #333',background:'#333'}}>
                <center>
                    <button style={{padding:'5px',background:'#fff',color:'#333',width:'60px',height:'50px',borderRadius:'5px',display:'inline-block',marginLeft:'5%'}} onClick={prevSong}>Prev</button>
                    <button style={{padding:'5px',background:'#fff',color:'#333',width:'80px',height:'50px',borderRadius:'5px',display:'inline-block',marginLeft:'5%'}} onClick={()=>{!status?play():stop()}}>{btn}</button>
                    <button style={{padding:'5px',background:'#fff',color:'#333',width:'60px',height:'50px',borderRadius:'5px',display:'inline-block',marginLeft:'5%'}} onClick={nextSong}>Next</button>
                </center>
                </div>
                <div style={{
                width:'100%',
                height:'50px',
                background:'#333',
                color:'#fff',
                textAlign:'center',
                padding:'5px',
                borderBottomLeftRadius:'10px',
                borderBottomRightRadius:'10px'
                }}></div>
           </div>
    )
}

export default MusicPlayer;