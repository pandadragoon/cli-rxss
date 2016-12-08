module.exports = function(name, upper){

return `
/* @flow */

import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';

const ${name} = ({ /* add store you are using */ }): Object => {
  return (
    <div>
    </div>
  );
};

${name}.propTypes = {
 /* add proptypes */
};

const ${upper} = observer(['/* add store you are using */'], ${name});

export { ${name} };

export default ${upper};
`;

}