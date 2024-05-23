// require dependencies before using them
const chalk = require('chalk');
const express = require('express'); 
const expressLayouts = require('express-ejs-layouts');
const favicon = require('serve-favicon');
const app = express(); 
const bodyParser = require('body-parser');
require('dotenv').config();

// environment variables from .env file
const PORT = process.env.SEREVER_PORT; 
const MODE = process.env.NODE_ENV; 

// setters
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('layout', './layouts/application');

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.use('/public/images', express.static(__dirname + '/public/images'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

// when any kind of route it used it is logged 
// to the servers console
app.use('/', (req, res, next) => {
	console.log(chalk.blue(`| IP ${chalk.underline.bold(req.ip)} | Path ${chalk.underline.bold(req.path)} | Method ${chalk.underline.bold(req.method)} |`))
	next()
})

// homes page route
app.get('/', (req, res)=>{ 
	res.render('index', {title: 'Home Page', description: 'Home page that will direct you to the different links!'} )
});

// express server listener
app.listen(PORT, (error) =>{ 
	if(!error) {
		console.log(chalk.green.bgBlack(`\n Server running at port: ${chalk.underline.bold(PORT)} in ${chalk.underline.bold(MODE)} mode : ${chalk.underline.bold(new Date().toUTCString())} \n`))
	}
	else {
		console.log(chalk.red(`\n Error occurred, server can't start: ${chalk.underline.bold(error)} \n`));
	}  
});