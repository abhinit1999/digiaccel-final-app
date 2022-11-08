const mongoose=require("mongoose")

const answer = new mongoose.Schema({
    question:{type: String, required: true },
    cor_ans:{type:String,required: true },
    date: { type: Date, default: Date.now },
    
})

const UserAnser = mongoose.model("UserAnser",answer);

module.exports=UserAnser;