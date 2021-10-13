import express from "express";
const router = express.Router();

import precio from '../models/precio'

//agregar cuenta
router.post('/precio-nuevo', async(req, res)=>{
    const body=req.body;

    try{
        const precioDB= await precio.create(body);
        res.status(200).json(precioDB);
    }
    catch(error){
        return res.status(500).json({
            mensaje:'Surgio un error',
            err
        })
    }
});
module.exports = router;