const {Schema,model, Types} = require('mongoose')


const shema = new Schema({
    name:{type:String, required:true},
    sizes:{type:Array, required:true},
    color: {type: String, require:true},
    photo:{type:String}
})


module.exports = model('Product',shema)