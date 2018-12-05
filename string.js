const express = require('express');
const app = express();

app.get('/square' , (req,res) => {
  var s = req.query.string;
  var a = {result: string_square(s)};
  res.json(a)
  res.end();
});

function string_square(s) {
  try {
    var len = s.length;
    return len*len;
  }
  catch(e) {
    return -1;
  }
}

app.listen(4000 || process.env.PORT, () => console.log('App is online on port 4000'))
