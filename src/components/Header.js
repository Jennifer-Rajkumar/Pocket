import React, { Component } from 'react'
import '../css/Header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Hello, User</h1>
                <p>
                    Welcome to your&nbsp;
                    <span>Pocket</span>
                </p>
            </div>
        )
    }
}

export default Header