const pred = require('express').Router();
const { spawn } = require('child_process')

pred.post('/', (req, res) => {
    const arr = [req.body.temperature, req.body.cough, req.body.fatigue, req.body.breathing, req.body.chestPain, req.body.heartDisease, req.body.lungDisease]
    const process = spawn('python', ['routes\\prediction.py', arr])
    process.stdout.on('data', (data) => {
        res.send(data.toString());
    });
});
module.exports = pred;