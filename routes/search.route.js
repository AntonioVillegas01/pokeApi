const { Router } = require( "express" );
const { getQuery } = require( "../controllers/search.controller" );

const router = Router();



router.get( '/:query', getQuery )




module.exports = router;