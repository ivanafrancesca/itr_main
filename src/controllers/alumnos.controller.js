/* eslint-disable linebreak-style */
/* eslint-disable space-in-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable quotes */
"use strict";

const alumnosRoute = require( "express" ).Router();
const { v4: uuidv4 } = require( "uuid" );
const alumnosModel = require( "./../models/alumnos.model" );

alumnosRoute.get( "/", async( req, res ) => {
    alumnosModel.allAlumnos()
    .then( data => {
        res.status( 200 ).json( { data } );
    } )
    .catch( error => {
        res.status( 500 ).json( { error } );
    } );
} );

alumnosRoute.get( "/:ncontrol", async( req, res ) => {
    const { ncontrol: ncontrol } = req.params;
    alumnosModel.getByIdAlumno( ncontrol )
    .then( data => {
        if( data.length > 0 ){
            res.status( 200 ).json( { data: { ...data[0] } } );
        }
        else {
            res.status( 404 ).json( { error: "No se encuentra este alumno" } );
        }
    } )
    .catch( error => {
        res.status( 500 ).json( { error } );
    } );
} );

alumnosRoute.post( "/", async ( req, res ) => {
    const {
        ncontrol,
        nombre,
        foto,
        carrera,
    } = req.body;
    alumnosModel.addAlumno( {
        ncontrol,
        nombre,
        foto,
        carrera,
    } )
    .then ( ( rowCount, more ) => {
        res.status(200).json( {
            data: {
                rowCount,
                more,
                ncontrol,
            },
        } );
    } )
    .catch ( error => {
        res.status( 500 ).json( { error } );
    } );
} );

alumnosRoute.put( "/:ncontrol", async(req, res) => {
    const { ncontrol: ncontrol } = req.params;
    const {
        nombre,
        foto,
        carrera,
    } = req.body;
    alumnosModel.updateAlumno( {
        ncontrol,
        nombre,
        foto,
        carrera,
    } )
    .then ( ( rowCount, more ) => {
        res.status( 200 ).json( {
            data: {
                rowCount,
                more,
                ncontrol,
            },
        } );
    } )
    .catch ( error => {
        res.status( 500 ).json( { error } );
    } );
} );

alumnosRoute.delete( "/:ncontrol", async ( req, res ) => {
    const { ncontrol: ncontrol } = req.params;
    alumnosModel.deleteAlumno( ncontrol )
    .then( ( rowCount, more ) => {
        res.status( 200 ).json( { rowCount, more } );
    } )
    .catch( error => {
        res.status( 500 ).json( { error } );
    } );
} );

module.exports = alumnosRoute;
