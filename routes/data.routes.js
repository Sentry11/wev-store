const {Router} = require('express')
const Data = require('../models/Product')


const router = Router()

router.post('/items', async (req, res) => {
    try{
        
        const items  = await Data.find()

        if (items){
            return res.status(200).json()
        }

        return res.status(400).json({message: 'Something wrong'})
    }
    catch (e){

    }
})

module.exports = router