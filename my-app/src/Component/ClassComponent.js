import React from 'react';

class ClassComponent extends React.Component{
    render(){
        
        return(
            <>
            <h1> I am a ClassComponent</h1>
            <h3> productName: {this.props.productName}</h3>
            <h4> price: {this.props.price}</h4>
            </>
        )
    }
}

export default ClassComponent