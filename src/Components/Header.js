import React from "react";

const clickHandler = () => {
    const about = document.getElementById("aboutSection");
    window.scrollTo({
        top:about.offsetTop - 200,
        left:0,
        behavior:'smooth'
    })
}

const Header = () => {
    return(
        <header className="Header">
            <div className="logoPlace">
                <h1><a href="/">TodoList</a></h1>
            </div>
            <nav>
                <button type="button" onClick={clickHandler}>About</button>
            </nav>
        </header>
    )
}

export default Header;