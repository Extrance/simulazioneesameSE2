const express = require('express');
const app = express();

app.get('/square' , (req,res) => {
  try{
    var s = req.query.string;
    var a = {result: string_square(s)};
    res.json(a)
    res.end();
  }
  catch(e) {
    var a = {result: -1};
    res.json(a)
    res.end();
  }
});

function string_square(s) {
    var len = s.length;
    return len*len;
}

app.listen(4000 || process.env.PORT, () => console.log('App is online on port 4000'))
