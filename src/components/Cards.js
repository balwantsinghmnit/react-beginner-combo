import React,{useState} from 'react';
import "./css/cards.css";
const profileimg = require("./profile.jpg");

function Cards() {
    const [temp_name,setTempName] = useState("Serena Ronn");
    const [temp_profile,setTempProfile] = useState(profileimg);
    const [profile,setProfile] = useState(profileimg);
    const [name,setName] = useState("Serena Ronn");
    const handlename = (e)=>{
        setTempName(e.target.value);
    }
    const handleProfile = (e)=>{
        setTempProfile(URL.createObjectURL(e.target.files[0]));
    }
    const handleData = (e)=>{
        e.preventDefault();
        setName(temp_name);
        setProfile(temp_profile);
    }
    return (
        <div>
            <form id="form" onSubmit={handleData} encType="multipart/form-data">
                <input className="form-control" type="text" name="name" placeholder="Your Name" 
                    onChange={handlename}
                /><br/>
                <label id="label" htmlFor="profile">Choose Profile Picture</label><br/>
                <input style={{display:"none"}} type="file" onChange={handleProfile} id="profile" name="profile" />
                <input type="submit" className="btn btn-success" value="Submit"/>
            </form>
            <div id="card">
                <h1>{name}</h1>
                <div style={{width:'100%'}}>
                    <img id="avatar" src={profile} alt="user profile"></img>
                </div>
                <div id="bio">
                    <p>Hello, my name is {name}.I don't want to say anything,I'll just say that I am the best. </p>
                </div>
                <div id="stats">
                    <div className="col">
                        <p className="stat">150</p>
                        <p className="label">Posts</p>
                    </div>
                            <div className="col">
                        <p className="stat">1.5M</p>
                        <p className="label">Followers</p>
                    </div>
                            <div className="col">
                        <p className="stat">14</p>
                        <p className="label">Following</p>
                    </div>
                </div>
                <div id="buttons">
                    <button>Follow</button>
                    <button id="msg">Message</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;
