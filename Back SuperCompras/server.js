const express = require('express'); 
const cors = require('cors');
const morgan = require('morgan');

const app = express(); 
app.set('port', process.env.PORT || 3002); 
app.set('json spaces', 2); //middlewares 
app.use(morgan('dev')); 
app.use(cors());

app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); 

//routes 
app.use(require('./src/routes'));


// Handle 404
app.use((req, res, next) => {
    res.status(400).json({ error: 'error 404: Not found' });
});

//Inicializar el servidor 
app.listen(3000, () => { 
    console.log( `API Server is running on port ${app.get('port')}`); 
});
 