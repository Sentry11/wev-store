const {Router} = require('express')

const User = require('../models/User')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken') 
const config = require('config')


const router = Router()


// /api/auth/register
router.post('/register',
[ check('email', 'Uncorected email').isEmail(), check('password','min lenght password is 6').isLength({min:6})],
async (req, res) => {



    try{

    
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message:'Uncorected registration data'
            })
        }

      
        const {email, password} = req.body

        const candidate = await User.findOne({ email })

        if (candidate){
          return res.status(400).json({message: 'This user already exist'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password:hashedPassword})

        await user.save()

        res.status(201).json({message: 'User registred'})
    }
    catch(e){
    res.status(500).json({message:'Something went wrong, try again'})
    }

})


// /api/auth/login
router.post('/login',
[check('email', "Enter correct email").normalizeEmail().isEmail(),
check('password', 'Enter password').exists()],
 async (req, res) => {

    try{

        const errors = validationResult(req)
        
        if(!errors.isEmpty()){
            return res.status(400).json({
               
                errors:errors.array(),
                message:'Uncorected authorization data'
            })
         
        }

        console.log(errors)

        const {email,password} = req.body

        const user = await User.findOne({email})

        if (!user) {
            return res.status(400).json({message: 'User was not find'})
        }
        
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({message: 'Wrong password, try again'})
        }

        const token = jwt.sign(
            { userId:user.id },
            config.get('jwtSecret'),
            {expiresIn:'1h'}
        )

        res.json({token, userId: user.id})


    
    }
    catch(e){
    res.status(500).json({message:'Something went wrong, try again'})
    }

})

module.exports = router