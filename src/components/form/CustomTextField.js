import React from 'react';
import TextField from '@material-ui/core/TextField';

const CustomTextField = (props) => {
    const {type, name, value, onChange, config} = props;

    return <TextField
        fullWidth={true}
        multiline={type === 'textarea'}
        label={config.label}
        type="text"
        value={value}
        onChange={f => onChange(name, f.target.value)}
    />
};

export default CustomTextField;
