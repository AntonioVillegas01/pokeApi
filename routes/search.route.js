const { Router } = require( "express" );
const {check} = require("express-validator");
const { getQuery } = require( "../controllers/search.controller" );
const {validateFields} = require('../middlewares')

const router = Router();



router.get( '/',[
    check('searchTerm', 'El termino de busqueda es obligatorio').not().isEmpty(),
    validateFields
], getQuery )




module.exports = router;