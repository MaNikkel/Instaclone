const mongoose = require('mongoose');
//representação da tabela do db com suas funcionalidades em formato javascript
const PostSchema = new mongoose.Schema({//seta a tabela do db do post, tipo uma migration
    author: String,                     //aparentemente aqui as requisições de db também é tratado
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }
}, {//segundo parâmetro
    timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);//linka a tabela com o model Post