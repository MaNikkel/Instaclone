const Post = require('../models/Post');
const sharp = require('sharp');//manipulação de imagens
const path = require('path');
const fs = require('fs');

module.exports = {//métodos do controller
    async index(req, res) {//lista dos posts
        const posts = await Post.find().sort('-createdAt');
        return res.json(posts);
    },

    async store(req, res) {//salva novo post
        const {author, place, description, hashtags} = req.body;//desestruturação
        const {filename: image} = req.file;

        const [name] = image.split('.');
        const fileName = `${name}.jpg`;

        //redimensionamento
        await sharp(req.file.path)
            .resize(500)
            .jpeg({quality:70})
            .toFile(
                path.resolve(req.file.destination, 'resized', fileName)
            )
        
        fs.unlinkSync(req.file.path);//descarta a imagem não redimensionada

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName,
        });

        req.io.emit('post', post);//emite a informação para todos users
        
        return res.json({post});
    }
}; 