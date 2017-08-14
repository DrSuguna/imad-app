var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article-one' : {
    heading:'APP Learning',
    content: `
 <p>
    This is first webpage.I am doing mobile app course from IIT Madras.I am doing mobile app course from IIT Madras.I am doing mobile app course from IIT Madras.I am doing mobile app course from IIT Madras.
    </p>`

    
    
},
'article-two':{   
    heading:'APP Learning',
    content: `
 <p>
    This is second webpage.I am doing mobile app course from IIT Madras.I am doing mobile app course from IIT Madras.I am doing mobile app course from IIT Madras.I am doing mobile app course from IIT Madras.
    </p>`
},
'article-three':{    
    heading:'APP Learning',
    content: `
 <p>
    This is third webpage.I am doing mobile app course from IIT Madras.I am doing mobile app course from IIT Madras.I am doing mobile app course from IIT Madras.I am doing mobile app course from IIT Madras.
    </p>`
}
};
function createtemplate(data){
var heading=data.heading;
var content=data.content;
var htmltemplate = `
    <html>
     <meta name="viewport" content="width-device-width" initial scale=1>
    <link href="/ui/style.css" rel="stylesheet" />
<body>
   
   
<div class="container">    
<div>
<a href="/">Home</a>
</div>
<div>
${heading}
</div>
<hr/>
<div>
${content}
</div>
</div>
</body>

</html>

`
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/:articleName', function (req, res) {
  res.send(createtemplate(articles[article-one]));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
