const app = require('express')(),
        bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/',require('./routers/sampleRoute'));

app.listen(8080,function () {
    console.log('successfully connected');
});