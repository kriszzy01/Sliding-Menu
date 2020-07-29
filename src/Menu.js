import React, {Component} from "react";
import "./Menu.css";

class Menu extends Component {
    handleMouseDown = () => {
        this.props.toggleMenu(true)
    }
    
    render() {
        return(
            <nav style = {this.props.state} onClick = {this.handleMouseDown}>
                <ul>
                    <li>Menu</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Search</li>
                </ul>
            </nav>
        );
    }
}

export default Menu;