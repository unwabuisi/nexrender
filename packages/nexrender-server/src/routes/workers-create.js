const { send, json } = require('micro');
const { create } = require('../helpers/worker');
const { insert } = require('../helpers/workerDatabase');

module.exports = async (req, res) => {
    const data = await json(req);
    const worker = await create(data); {
        worker.address = req.socket.remoteAddress;
        worker.pid = req.params.pid;
    }

    console.log(`creating new worker ${worker.pid}`);

    try {
        await insert(worker);
    }
    catch (err) {
        return send(res, 400, err.stack);
    }

    send(res, 200, worker);
}