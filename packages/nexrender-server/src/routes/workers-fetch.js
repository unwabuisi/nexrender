const { send }  = require('micro')
const { fetch } = require('../helpers/workerDatabase')

module.exports = async (req, res) => {
    if (req.params.pid) {
        console.log(`fetching job ${req.params.pid}`)
        send(res, 200, await fetch(req.params.pid))
    } else {
        console.log(`fetching list of all workers`)
        send(res, 200, await fetch())
    }
}
