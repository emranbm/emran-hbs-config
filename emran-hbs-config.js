/**
    Sets some configs to the app. Also sets 'assets' folder in 'views' direcory, a public folder for css, javascript, ... lookup.
    
    @param app The 'express' framework object
    @param appRoot The root of the app. (Usually just __dirname in your index.js)
    @author Mr. Coder
**/
module.exports = function (app, appRoot) {
    const path = require('path');
    const exphbs = require('express-handlebars');

    const express = require('express');

    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        extname: '.hbs',
        layoutsDir: path.join(appRoot, 'views/layouts')
    }));

    app.set('view engine', '.hbs');
    app.set('views', path.join(appRoot, 'views'));

    app.use(express.static(path.join(appRoot, 'views/assets')));
}
