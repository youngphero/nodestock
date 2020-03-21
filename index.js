const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');

// Set handlebar express
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//set handlbars routes
app.get('/', function (req, res) {
    res.render('home',
     {
      stuff:"this is mu first var"
     }

    	);
});


const path = require('path');


const PORT = process.env.PORT || 5000;


app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server Listening on port ' + PORT));

