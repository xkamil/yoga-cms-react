import React, {Component} from 'react';
import {Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core';
import {connect} from 'react-redux'
import PortalListItem from "./PortalListItem";

class PortalsList extends Component {

    getPortalList = (portals) => {
        if (!portals) {
            return;
        }

        return portals.map((portal, key) => <PortalListItem key={key} portal={portal}/>);
    };

    render() {
        const {lang, portals = []} = this.props;
        let items = this.getPortalList(portals);

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{lang.options}</TableCell>
                        <TableCell>{lang.id}</TableCell>
                        <TableCell>{lang.name}</TableCell>
                        <TableCell>{lang.label}</TableCell>
                        <TableCell>{lang.description}</TableCell>
                        <TableCell>{lang.active}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items && items}
                </TableBody>
            </Table>
        );
    }
}

const mapStateToProps = state => ({
    lang: state.config.lang
});

export default connect(mapStateToProps)(PortalsList);