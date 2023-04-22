const _ = require('lodash');

export function camelCase(valor) {
    return _.camelCase(valor);
}

export default {
    camelCase,
}