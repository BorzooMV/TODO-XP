import React from "react";

const Header = () => {
    return(
        <header className="Header">
            <div className="logoPlace">
                <h1><a href="/">TodoList</a></h1>
            </div>
            <nav>
                <a href="#">About</a>
            </nav>
        </header>
    )
}

export default Header;