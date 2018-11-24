import React from 'react';
import CustomTextField from "./CustomTextField";
import CustomListField from "./CustomListField";

const components = {
    text: CustomTextField,
    textarea: CustomTextField,
    list: CustomListField
};


const FieldBuilder = {
    build: (key, type, name, value, onChange, config)=>{
        const TagName = components[type];
        return <TagName type={type} key={key} name={name} onChange={onChange} value={value} config={config}/>
    },
};

export default FieldBuilder;
