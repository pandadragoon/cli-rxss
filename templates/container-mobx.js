module.exports = function(name, upper){

return `
/* @flow */

import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';


class ${name} extends Component {
  render() {
    let { /* store name */ } = this.props;
    return (
      <div>
      </div>
    );
  }
}

${name}.propTypes = {
/* fill out props */
};

const ${upper} = observer(['/* store name */'], ${name});

export { ${name} };
export default ${upper};
`;

}