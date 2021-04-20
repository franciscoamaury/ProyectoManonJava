var express = require("express");
var app = express();

app.get('/', function(req, res) {

    res.send('Hola Mundo');
    
    });
    
    var server = app.listen(3000, function () {
    
    console.log('Servidor levantado en el puerto 3000');
    
    });
    app.post('/1', function (req, res) {

        res.send('Datos insertados');
        
        });
        app.route('/libro')

        .get(function (req, res) {
        
        res.send('Devuelvo un libro');
        
        })
        
        .post(function (req, res) {
        
        res.send('Añado un libro');
        
        })
        
        .put(function (req, res) {
        
        res.send('Actualizo un libro');
        
        });
        app.get('/', function (req, res) {

            res.send('Enviando la página principal');
            
            });
            
            app.get('/foo', function (req, res) {
            
            res.send('Enviando foo');
            
            });
            
            app.get('/foo/bar', function (req, res) {
            
            res.send('Enviando bar');
            
            });
            
            app.use(function (req, res, next) {

                res.status(404);
                
                res.send('Ná, que no hay nada ahí');
                
                });
                app.get('/*', function (req, res) {

                    res.send('Enviando la página principal');
                    
                    });
                    
                    app.get('/foo', function (req, res) {
                    
                    res.send('Enviando foo');
                    
                    });