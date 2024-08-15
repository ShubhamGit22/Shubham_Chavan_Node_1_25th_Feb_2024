import express from "express"

import Post from "../model/post.js";
const Router = express.Router();

// http://localhost:5000/api/post/blog
Router.post('/blog', async (req,res) => {
    const {title, content, author} = req.body;

    try{
        const post = new Post({title, content, author});
        await post.save();
        res.status(200).json({message : "Blog Post Saved Successfully..."})

    }catch(error){
        res.status(400).json({message : "Error While Saving Blog Post"})
    }
})

export default Router;