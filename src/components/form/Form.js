import React, {Component} from 'reactn';
import FieldBuilder from './FieldBuilder';

class Form extends Component {

    constructor(fields) {
        super();
        this.fields = fields;
        this.init(fields);
    }

    init = (fields) => {
        const initialState = {};
        fields.forEach(field => initialState[field.name] = field.value);
        this.state = {values: initialState};
    };

    onChange = (name, value) => {
        const values = this.state.values;
        values[name] = value;
        this.setState({...this.state, values});
    };

    render() {
        return this.fields.map((field, key) =>
            <div style={{width: 300, margin: 'auto', textAlign: 'left'}}>
                {FieldBuilder.build(key, field.type, field.name, this.state.values[field.name], this.onChange,
                    field.config)}
            </div>
        );
    }

}

export default Form;
