/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable eol-last */
"use strict";

if ( process.env.NODE_ENV !== "production" ) {
  require( "dotenv" ).config();
}

const {
    PORT,
    HOST,
    HOST_URL,
} = process.env;

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
};