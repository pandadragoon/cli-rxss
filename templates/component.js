module.exports = function(name, upper){

return `
/* @flow */

import React, { PropTypes } from 'react';

const ${upper} = (props: Object): Object => {
  return (
      <div></div>
  );
}

${upper}.propTypes = {
/* fill out propTypes */
};

export default ${upper};
`
}
