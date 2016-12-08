module.exports = function(name, upper){

return `
/* @flow */

import React, { Component, PropTypes } from 'react';

class ${upper} extends Component {
    constructor(props: Object) {
        super(props);

        this.state = {/* add your state */};
    }

    render(): Object {
        return (
            <div></div>
        )
    }
}

${upper}.propTypes = {
    /* fill out proptypes */
}

export default ${upper};
`

}