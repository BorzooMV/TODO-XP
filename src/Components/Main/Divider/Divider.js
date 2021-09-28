import React from "react";

const Divider = (props) => {
    return(
        <>
            <hr className="hr-m" />
            <h2 id={props.id?props.id:''} className={props.align === "center"?"Divider-Center":"Divider"}>
                {props.title?props.title:"Title"}
            </h2>
            <hr className="hr-l" />
        </>
    )
}

export default Divider;