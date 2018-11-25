import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MainMenu extends Component {



    render() {
        const {lang} = this.props;

        return (
            <div style={{position: 'absolute', left: 100, top: 10}}>
                <Link to='/portals'>Portals </Link>
                <Link to='/'>Home</Link>
            </div>
        );
    }
}


export default MainMenu;

