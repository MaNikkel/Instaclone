const Post = require('../models/Post');

module.exports = {
    async store(req, res){
        const post = await Post.findById(req.params.id);
        post.likes += 1;
        await post.save();
        req.io.emit('like', post);//emite a informação para todos users
        return res.json(post);
    }
}