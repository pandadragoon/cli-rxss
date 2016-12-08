module.exports = function(name, upper){

return `
/* @flow */

import React, { PropTypes } from 'react'

const ${name} = (props: Object): Object => {
    return (
        <div></div>
    )
}

${name}.propTypes = {
/* fill out propTypes */
};

export { ${ name } };
export default ${upper};
`
}