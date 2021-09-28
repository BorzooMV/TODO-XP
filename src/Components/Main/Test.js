import React from "react";

const Test = () => {
    return (
        <div>
            <h1>Testing...</h1>
            <Box />
            <Box />
            <Box />
            <Box />
        </div>
    )
}

const Box = () => {
    return(
        <div onClick={()=>alert("Hi")} 
        style={{
            "height":"40px",
            "width":"40px",
            "background":"green",
            "margin":"10px",
            "cursor":"pointer"
            }}>
        </div>
    )
}

export default Test;