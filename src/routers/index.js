
const {Router } = require('express');

const router = Router ();

router.get('/test',(req,res)  => {
    const data = {
         "name" : "PROYECTO ",
         "website " : "espol.com.ec"};
    res.json(data);
});   
    
module.exports = router;


