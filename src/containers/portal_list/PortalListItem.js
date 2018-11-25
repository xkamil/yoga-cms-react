import React, {Component} from 'react';
import {Button, Grid, TableCell, TableRow} from '@material-ui/core';
import {Link} from "react-router-dom";
import {Delete, Pageview} from '@material-ui/icons';

class PortalListItem extends Component {

    render() {
        const {portal} = this.props;

        return (
            <TableRow>
                <TableCell>
                    <Grid container item direction='row'>
                        <Grid item>
                            <Link to={'/portals/' + portal._id}>
                                <Button size='small' variant='outlined'>
                                    <Pageview/>
                                </Button>
                            </Link>
                        </Grid>

                        <Grid item>
                            <Button size='small' variant='outlined'>
                                <Delete/>
                            </Button>
                        </Grid>
                    </Grid>
                </TableCell>
                <TableCell>{portal._id}</TableCell>
                <TableCell>{portal.name}</TableCell>
                <TableCell>{portal.label}</TableCell>
                <TableCell>{portal.description}</TableCell>
                <TableCell>{portal.active ? 'true' : 'false'}</TableCell>
            </TableRow>
        );
    }
}

export default PortalListItem;
