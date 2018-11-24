import React, {Component} from 'react';
import {List, ListItem, ListItemIcon, TextField} from '@material-ui/core';
import Remove from '@material-ui/icons/RemoveCircle';
import AddIcon from '@material-ui/icons/AddCircle';

class CustomListField extends Component {

    onItemChange = (id, value) => {
        this.valueCopy.items[id] = value;
        this.props.onChange(this.props.name, this.valueCopy);
    };

    onDeleteItem = (id) => {
        this.valueCopy.items.splice(id, 1);
        this.props.onChange(this.props.name, this.valueCopy);
    };

    onAddItem = () => {
        this.valueCopy.items.push('');
        this.props.onChange(this.props.name, this.valueCopy);
    };

    createTextField = (id) => {
        return <TextField key={id}
                          fullWidth={true}
                          value={this.props.value.items[id]}
                          onChange={v => this.onItemChange(id, v.target.value)}/>
    };

    createListItem = (id) => {
        return <ListItem style={{paddingLeft: 0, paddingRight: 0}}>
            <ListItemIcon onClick={() => this.onDeleteItem(id)}>
                <Remove/>
            </ListItemIcon>
            {this.createTextField(id)}</ListItem>;
    };

    render() {
        const {config, value} = this.props;
        this.valueCopy = JSON.parse(JSON.stringify(value));

        return <React.Fragment>
            {value.items.length > 0 &&
            <List label={config.label}
                  disablePadding={true}
            >{this.props.value.items.map((value, idx) => this.createListItem(idx))}</List>}

            <AddIcon onClick={this.onAddItem} style={{float: 'right'}}/>
        </React.Fragment>
    }
}

export default CustomListField;
