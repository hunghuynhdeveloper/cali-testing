
var userprofileservice = require('./services/user-profile-service');

var express = require('express');
var app = express();

app.get('/', function (req, res) {    
   res.send('Hello World');
})

app.get('/users', (req, res) => {
    //TODO: var rs = userprofileservice.getUserProfileList();
    return res.send('GET HTTP method on user resource');
});
  
app.post('/users', (req, res) => {
    //TODO: var rs = userprofileservice.createUserProfile();
    return res.send('POST HTTP method on user resource');
});

app.put('/users', (req, res) => {
    //TODO: var rs = userprofileservice.updateUserProfile();
    return res.send('PUT HTTP method on user resource');
});

app.delete('/users', (req, res) => {
    //TODO: var rs = userprofileservice.deleteUserProfile();
    return res.send('DELETE HTTP method on user resource');
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})