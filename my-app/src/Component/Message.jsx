import React from "react";
import '../index.css';



class message extends React.Component{

    constructor(){
        super()
        this.state = {
            message: "Welcome to besant tech"
        }
    }


    
    changeHandler(){
        this.setState({
            message: "Thank you for visiting"
        })
    }

    refreshHandler(){
        this.setState({
            message: "Welcome to besant tech"
        })
    }
    render(){
        
        return(
            <>
            <div className="div-style">
                <h1 style={{color:this.state.message === "Welcome to besant tech" ? "green" :"red"}}
                >{this.state.message}</h1>
                <button onClick={() => this.changeHandler()}
                    className="btn1-style" >
                        Click Here </button>

                <button onClick={() => this.refreshHandler()}>
                    Refresh </button>


            </div>
            </>
        )
    }
}

export default message
        

