exports.success = function (req, res, queen, status) {
    res.status(status || 200).send({
        error: '',
        body: queen
    });
}

exports.error = function (req, res, queen, status, details) {
    console.error('[response error]'+ details);
    res.status(status || 500).send({
        error: ',',
        body: queen
    })
}