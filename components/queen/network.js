const express = require('express');
const response = require('../../network/response');
const controller = require('./constroller');

const router = express.Router();

router.post('/', (req, res) => {
    controller.addQueen(req.body.queen)
        .then((data)=>{
            response.success(req, res, data, 201);
        })
        .catch((err)=>{
            response.error(req, res, 'Internal error', 500, err);
        });
})

router.get('/', (req, res) => {
    controller.getQueen()
        .then(queensList => {
            response.success(req, res, queensList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        })
})

module.exports = router;