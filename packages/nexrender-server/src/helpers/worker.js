const assert = require('assert');
const nanoid = require('nanoid');


/**
 * Take an optional minimal job json/object
 * and return a properly structured job object
 *
 * @param  {Object} job optional
 * @return {Object}
 */

const create = worker => Object.assign({
    uid: worker.uid ? worker.uid : nanoid(),
    state: 'available'
})

module.exports = {
    create
}