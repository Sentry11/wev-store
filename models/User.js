const {Schema,model, Types} = require('mongoose')

const shema = new Schema({
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    info: [{type: Types.ObjectId, ref: 'Info'}]
})


module.exports = model('User',shema)