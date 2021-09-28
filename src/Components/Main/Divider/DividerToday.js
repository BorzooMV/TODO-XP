import React from "react";

const DividerToday = (props) => {
    return(
        <>
            <hr className="hr-m" />
            <div className="DividerToday">
                <h2 className={props.align === "center"?"Divider-Center":"Divider"}>{props.title?props.title:"Title"}</h2>
                <span>{props.date}</span>
            </div>
            <hr className="hr-l" />
        </>
    )
}

export default DividerToday;