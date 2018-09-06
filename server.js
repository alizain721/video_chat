const express = require('express');
var path = require('path')
const app = express();
// Folder to server custom js files
app.use('/public', express.static(path.join(__dirname, '/public')));
//Server setup
app.listen(3000,function() {
  console.log('listening on 3000')
});
app.get('/chat',function(req,res){
  res.sendFile(__dirname + '/index.html')
})

