import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    title : {
        type : String, 
        require : true
    },
    content : {
        type : String,
        require : true
    },
    author : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true },
    date : {
        type : Date,
        default : Date.now
    }
})

const Post = mongoose.model('post', postSchema);

export default Post;