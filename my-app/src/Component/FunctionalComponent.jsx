// import React from 'react';

// function FunctionalComponent(props){
//         return(
//             <>
//             <h1> I am a Functional Component</h1>
//             </>
//         )
//     }

// export default FunctionalComponent;
// -------------------------------------------------
// arrow function
const FunctionalComponent = ({name, subject}) =>{
    return(
        <>
        <h1 style={{color:'green', backgroundColor: 'blue'}}> I am a Functional Component</h1>

        <h3>Welcome <span style={{color:'yellow', backgroundColor:'blue', padding:'10px'}}> {name}</span> to <span className='span-style'>{subject}</span>
        </h3>
        </>
    )
}
export default FunctionalComponent;

