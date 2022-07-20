require( 'dotenv' ).config()
const express = require( 'express' )
const cors = require( 'cors' )
const port = process.env.PORT
const app = express();


/*
    Avoid cors errors allowiing all connections
* */
app.use( cors() )

/*
    Lecture and json body Parse
* */
app.use( express.json() )

/*
    Current App routes available
* */
app.use( '/api/pokemon', require( './routes/pokemon.route' ) );
app.use( '/api/search', require( './routes/search.route' ) );




app.listen( port, () => {
    console.log( `Servidor corriendo en puerto ${port}` )
} )