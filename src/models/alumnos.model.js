/* eslint-disable linebreak-style */
/* eslint-disable space-in-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable quotes */
"use strict";

const execQuery = require( "./../helpers/execQuery" );
const TYPES = require( "tedious" ).TYPES;

const addAlumno = ( alumnoData ) => {
    const {
        ncontrol
        , nombre
        , foto
        , carrera,
    } = alumnoData;
    const query = `INSERT INTO alumnos VALUES (@ncontrol, @nombre, @foto, @carrera)`;
    const parameters = [
        { name: "ncontrol", type: TYPES.Int, value: ncontrol },
        { name: "nombre", type: TYPES.Text, value: nombre },
        { name: "foto", type: TYPES.Image, value: foto },
        { name: "carrera", type: TYPES.Text, value: carrera },
    ];
    return execQuery.execWriteCommand( query, parameters );
};

const updateAlumno = ( alumnoData ) => {
    const {
        ncontrol
        , nombre
        , foto
        , carrera,
    } = alumnoData;
    const query = `UPDATE alumnos SET ncontrol = @ncontrol, nombre = @nombre, 
    foto = @foto, carrera = @carrera WHERE ncontrol = @ncontrol`;
    const parameters = [
        { name: "ncontrol", type: TYPES.Int, value: ncontrol },
        { name: "nombre", type: TYPES.Text, value: nombre },
        { name: "foto", type: TYPES.Image, value: foto },
        { name: "carrera", type: TYPES.Text, value: carrera },
    ];
    return execQuery.execWriteCommand( query, parameters );
};

const deleteAlumno = ( ncontrol ) => {
    const query = `DELETE FROM alumnos WHERE ncontrol = @ncontrol`;
    const parameters = [
        { name: "ncontrol", type: TYPES.Int, value: ncontrol },
    ];
    return execQuery.execWriteCommand( query, parameters );
};

const allAlumnos = () => {
    const query = `select * from alumnos`;
    return execQuery.execReadCommand(query);
};

const getByIdAlumno = ( ncontrol ) => {
    const query = `SELECT * FROM alumnos WHERE ncontrol = @ncontrol`;
    const parameters = [
        { name: "ncontrol", type: TYPES.Int, value: ncontrol },
    ];
    return execQuery.execReadCommand( query, parameters );
};

module.exports = {
    addAlumno,
    updateAlumno,
    deleteAlumno,
    allAlumnos,
    getByIdAlumno,
};