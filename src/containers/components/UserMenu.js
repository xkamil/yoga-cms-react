import React, {Component} from 'react';
import AuthService from "../../services/AuthService";
import { Button} from '@material-ui/core';
import {connect} from 'react-redux'

class UserMenu extends Component {

    onLogOut = () => {
        AuthService.logout();
    };

    render() {
        const {lang} = this.props;

        return (
            <div style={{position: 'absolute', right: 10, top: 10}}>
                <Button onClick={this.onLogOut}>{lang.logout}</Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    lang: state.config.lang
});

export default connect(mapStateToProps)(UserMenu);

