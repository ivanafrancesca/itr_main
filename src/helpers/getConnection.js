/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/*eslint linebreak-style: ["error", "windows"]*/
"use strict";
const Connection = require( "tedious" ).Connection;

if ( process.env.NODE_ENV !== "production" ) {
  require( "dotenv" ).config();
}

const {
    SQL_HOST,
    SQL_DATABASE,
    SQL_USER,
    SQL_PASSWORD,
    SQL_AUTH_TYPE,
} = process.env;

const config = {
  authentication: {
    options: {
      userName: SQL_USER, // update me
      password: SQL_PASSWORD // update me
    },
    type: SQL_AUTH_TYPE
  },
  server: SQL_HOST, // update me
  options: {
    database: SQL_DATABASE, //update me
    encrypt: true,
    rowCollectionOnDone: true
  }
};

const getConnection = () => {
    const connect = () => new Promise( ( resolve, reject ) => {
        const con = new Connection( config );
        con.on( "connect", ( error ) => {
            if( !error ) {
                resolve( con );
            }
            else {
                reject( error );
            }
        } );

        con.connect();
    } );

    return { connect };
};

module.exports = getConnection;
