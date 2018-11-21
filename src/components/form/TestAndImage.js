import React, {Component} from 'reactn';
import Form from "./Form";

const fields = [
    {
        type: 'text',
        name: 'title',
        value: '',
        config: {
            label: 'Title'
        }
    },
    {
        type: 'textarea',
        name: 'description',
        value: '',
        config: {
            label: 'Description'
        }
    },
    {
        type: 'list',
        name: 'todo',
        value: {
            items: ['jeden', 'dwa']
        },
        config: {
            label: 'dupa blada'
        }
    }
];

class TextAndImage extends Form {
    constructor() {
        super(fields);
    }

}

export default TextAndImage;
