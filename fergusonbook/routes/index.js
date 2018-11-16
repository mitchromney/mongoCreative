var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/fergusons', function(req, res) {
  console.log("In Fergusons");
  res.send(fergusons);
});
router.post('/fergusons', function(req, res) {
    console.log("In Fergusons Post");
    console.log(req.body);
    fergusons.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
}); 
module.exports = router;


var fergusons = [
  {
    name: 'Turd Ferguson',
    avatarUrl: 'https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-1/p160x160/43422186_10217517321994754_993002473264250880_n.jpg?_nc_cat=105&_nc_ht=scontent.fmkc1-1.fna&oh=b58ed7eb70ed58ee7565076b540f0455&oe=5C82F3A0'
  }
];

