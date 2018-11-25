import React, {Component} from 'react';
import {Grid} from '@material-ui/core';

class Debug extends Component {

    render() {
        const {json, disabled, name} = this.props;

        return (
            <React.Fragment>
                {disabled || <Grid container xs={12}>
                    <pre>DEBUG {name} <br/>{json && JSON.stringify(json, null, 3)}</pre>
                </Grid>}
            </React.Fragment>
        );
    }
}


export default Debug;

