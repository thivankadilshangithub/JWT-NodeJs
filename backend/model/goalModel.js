const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
   text : {type:String , required : [true , 'Please add a value'],
}
}, {timestamps:true});

module.exports = mongoose.model('goals', goalSchema)