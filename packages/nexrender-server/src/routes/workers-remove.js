const {send} = require('micro');
const {remove} = require('../helpers/workerDatabase');

module.exports = async (req, res) => {
    console.log(`removing worker ${req.params.pid}`);

    try {
        await remove(req.params.pid);
    }
    catch (err) {
        return send(res, 400, err)
    }
    send(res,200,{id:req.params.pid, remove: true});
}