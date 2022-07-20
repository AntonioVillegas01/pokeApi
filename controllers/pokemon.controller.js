const {response} = require("express");
const axios = require("axios");


const getAll = async( req, res = response ) => {

   const BASE_URL =  process.env.POKE_API_BASE_URL
    const limit = req.params.limit || '1154'

    try{
        let config = {
            method: 'GET',
            url: `${BASE_URL}/?limit=${limit}`,
        };
        const {data} = await axios(config)

       return  res.json({
            ok: true,
            result: data
        })

    }catch (e) {
        console.error(`Error Trying to get ip:`, e)
        return   res.status(500).json({
            ok:false,
            msg:'Internal Server Error'
        })
    }




}

module.exports ={
    getAll
}