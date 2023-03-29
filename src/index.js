/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/*eslint linebreak-style: ["error", "windows"]*/
"use strict";

const config = require( "./config" );
const express = require( "express" );
const cors = require( "cors" );
const dotenv = require( "dotenv" );
const alumnosController = require( "./controllers/alumnos.controller" );

const startServer = async () => { 
    try {
        dotenv.config();
        const app = express();
        app.use( cors() );
        /*app.get( "*", function( req,res ){
            res.json( { message: "hola" } );
        } );*/
        app.use( express.json() );

        app.use( ( req, res, next ) => {
            console.log( `Request client URL: ${ req.get( "host" ) } ${ req.originalUrl }` );
            next();
        } );

        app.use( "/api/alumnos", alumnosController );

        //app.use( "", api );
        app.listen( config.port || 80, () => {
            console.log( `Server running at http://${ config.host }: ${ config.port }` );
        } );
        // \r\n
        
    } // \r\n
	catch( err ) {
		console.log( "Startup error", err );
	}
}; // \r\n

startServer();
