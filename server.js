var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});


var multer  = require('multer')
var upload = multer()

//I could define a destination for storage 
//but not necessary for this challange
app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
//req.file (or req.files) will contain the info you need for this one 
  //console.log(req.file)
  const resObj = {}
  resObj.name = req.file.originalname
  resObj.type = req.file.mimetype
  resObj.size = req.file.size
  res.json(resObj)
})