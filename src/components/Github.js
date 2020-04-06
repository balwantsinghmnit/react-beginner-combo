import React, { Component } from 'react'

class Github extends Component {
    state={
        loaded:false,
        id:'',
        users:[],
        user:1
    }
    componentDidMount()
    {
        fetch('https://api.github.com/users')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                loaded:true,
                users:json
            })});
            
    }
    changeid=(e)=>{
        this.setState({
            id:e.target.value
        });
    }
    showUser = (e)=>{
        e.preventDefault();
        if(this.state.id<1 || this.state.id>30)
        alert("invalid id");
        else{
            this.setState({
                user:this.state.id
            });
    
        }

    }

    render() {
        if(this.state.loaded)
        {
        return (
            <center>
            <div  style={{width:'60%',marginTop:'20px'}}>
                <h1>30 Users Currently we Have</h1>
                    <form onSubmit={this.showUser}>
                        <input type="number" style={{height:'40px',borderRadius:'5px',margin:'5px'}} value={this.state.id} onChange={this.changeid} placeholder="Enter id"/>
                        <input type="submit" value="Submit" style={{marginTop:'-2px'}} className="btn btn-success" />
                    </form><br/>
                    <div >
                        <img src={this.state.users[this.state.user-1].avatar_url}/>
                        <p>Name : {this.state.users[this.state.user-1].login}</p>
                        <p>Type : {this.state.users[this.state.user-1].type}</p>
                    </div>
            </div>
            </center>
        )
        }
        else
        {
            return(<div><h1>"Data loading........"</h1></div>);
        }
    }
}
export default Github;
