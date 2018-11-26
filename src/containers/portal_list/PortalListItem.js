import React, {Component} from 'react';
import {TableCell, TableRow} from '@material-ui/core';
import {Link} from "react-router-dom";
import {PageviewOutlined} from '@material-ui/icons';

class PortalListItem extends Component {

    render() {
        const {portal} = this.props;

        return (
            <TableRow>
                <TableCell>
                    <Link to={'/portals/' + portal._id}>
                        <PageviewOutlined/>
                    </Link>
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
