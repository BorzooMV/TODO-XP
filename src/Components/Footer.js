import React from "react";

const clickHandler = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    });
}

const Footer = () => {
    return(
        <footer className="Footer">
            <button type="button" onClick={clickHandler}><i className="fas fa-arrow-up"></i></button>
        </footer>
    )
}

export default Footer;