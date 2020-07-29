import React, { Component } from "react";
import Menu from "./Menu";

class MenuContainer extends Component {
    state = {
        width: "0vw"
    };

    toggleMenu = (mouseDown) => {
        this.setState({width: mouseDown === true ? "0vw": "100vw"})
    }

    render() {
        return (
            <div>
                <header>
                    <div id="button" onClick = {this.toggleMenu}/>
                    <Menu state = {this.state} toggleMenu = {this.toggleMenu}/>

                </header>
                <main>
                    <section>
                        <p>Can you spot the item that doesn't belong</p>
                        <ul>
                            <li>Lorem</li>
                            <li>Ipsum</li>
                            <li>Dolor</li>
                            <li>Sit</li>
                            <li>COnsrtrdfv</li>
                        </ul>
                    </section>
                </main>
            </div>
        );
    }
}

export default MenuContainer;