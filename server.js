import express from 'express';
import path  from 'path';
import open from 'open';
import morgan from 'morgan';


const app = express();
const port = 3000;

app.use(morgan(':method :url :response-time'))

app.get('/', function(req, res){
    require('sleep').sleep(1);
    res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    // else{
    //     open(`http://localhost:${port}`)
    // }
})