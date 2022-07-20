const { Router } = require( "express" );
const {
    getAll,
    getPokemonById

} = require( '../controllers/pokemon.controller' );


const router = Router();


router.get( '/',  getAll )



module.exports = router