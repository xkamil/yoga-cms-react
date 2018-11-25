import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {List, Button} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';

class MainMenu extends Component {

    constructor() {
        super();

        this.state = {
            portalOpen: false
        }
    }


    render() {
        const {lang} = this.props;

        const link = (to, label) => <Link to={to} style={{ textDecoration: 'none'}}><Button style={{minWidth: 120}} variant="outlined" >{label}</Button></Link>

        return (
            <List>
                <ListItem>
                    {link('/', 'Home')}
                </ListItem>

                <ListItem>
                    {link('/portals', 'Portals')}
                </ListItem>
            </List>
        );
    }
}


export default MainMenu;

