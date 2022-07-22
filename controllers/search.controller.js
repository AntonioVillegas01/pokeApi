const {response} = require("express");
const axios = require("axios");
const {searchSubstring} = require("../utils/utils");


const getQuery = async( req, res = response ) => {

    const BASE_URL =  process.env.POKE_API_BASE_URL
    const limit = req.params.limit || '1154'
    const searchTerm = req.query.searchTerm   // this field has been validated to not to be empty on the routes middlewares
    console.log(searchTerm)

    try{
        let config = {
            method: 'GET',
            url: `${BASE_URL}/?limit=${limit}`,
        };
        const {data} = await axios(config)
        // Search for name matches
        const finalResult = searchSubstring(searchTerm,data.results)

        return   res.json({
            ok: true,
            total: finalResult.length,
            result: finalResult
        })

    }catch (e) {
        console.error(`Request Failed with the following error:`, e)
        return    res.status(500).json({
            ok:false,
            msg:'Internal Server Error'
        })
    }
 //


}

module.exports = {
    getQuery,
}