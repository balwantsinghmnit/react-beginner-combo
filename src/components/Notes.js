import React, { Component } from 'react';
import "./css/notes.css";

class Notes extends Component {

     state = {
            temp_note:"",
            temp_color:"red",
            notes:[]
        }
    handlenote=(e)=>{
        this.setState({
            temp_note:e.target.value
        });
    }
    handleColor=(e)=>{
        this.setState({
            temp_color:e.target.value
        });
    }
    handleMyData=(e)=>{
        e.preventDefault();
        const arr = this.state.notes;
        arr.push(<div style={{width:'200px',border:'1px solid '+this.state.temp_color,borderRadius:'5px',display:'inline-block',margin:'10px'}}>
            <h3 style={{width:'100%',background:this.state.temp_color,color:'#fff'}}>Note</h3>
            <li style={{color:this.state.temp_color,listStyle:'none',textAlign:'center'}}>{this.state.temp_note}</li>
        </div>);
        this.setState({
            notes:arr
        });
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleMyData}>
                    <h1>Note Maker</h1>
                    <div className="form-group"><input type="text" value={this.state.temp_note} onChange={this.handlenote} placeholder="Enter note..." className="form-control"/></div>
                    <div className="form-group"><input type="color" value={this.state.temp_color} onChange={this.handleColor} className="form-control" /></div>
                    <input type="submit" value="submit" className="btn btn-danger" style={{width:'100%'}}/>
                </form>
                <div style={{marginTop:"30px"}}>
                    <h2 style={{background:'greenyellow',margin:'auto',width:"50%",textAlign:'center'}}>Your Notes Are Here</h2>
                    <p>{this.state.notes}</p>
                </div>
            </div>
        )
    }
}
export default Notes;
