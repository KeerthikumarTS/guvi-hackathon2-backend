const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    email:{
       type:String,
       required:true
    },
    cartItems:{
       type:Array,
       required:true
    },
    quantity:{
        type:Number,
        default:1
    },
    cartTotal:{
        type:Number,
        required:false
    },
    createdOn:{
        type:Date,
        default:Date.now()
    },
    updatedOn:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('carts',cartSchema);

