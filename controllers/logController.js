const router = require('express').Router();
const Log = require('../models/log');
const User = require('./userController');

const ownerId =  function generate(count) {
    let founded = false,   
_sym = 'abcdefghijklmnopqrstuvwxyz1234567890',
str = '';
while(!founded) {
for(let i = 0; i < count; i++) {
    str += _sym[parseInt(Math.random() * (_sym.length))];
}
base.getID(string, function(err, res) {
    if(!res.length) {
        founded = true; 
    }
});
}
return str;
} 


router.get('/test', (req, res) => {
    res.send('testing the log controller');
});

router.post('/workout', (req, res) =>{
    Log.create({
        description: req.body.description, 
        definition: req.body.definition,
        result: req.body.result,
        owner_id: ownerId
    })
    .then (log => {
        res.send(Log)
    })
        
        .catch(error => res.status(500).send({
            message: 'log not created',
            error: error.errors[0].message
        }))
})
module.exports = router;