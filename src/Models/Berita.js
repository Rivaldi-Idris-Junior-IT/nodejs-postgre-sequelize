const Sequelize = require('sequelize');
const db = require('../Config/Database');

const Berita = db.define('tblberita', {
    id_kategori: {
        type: Sequelize.INTEGER
    },
    headnews: {
        type: Sequelize.STRING
    },
    isi_berita: {
        type: Sequelize.TEXT
    },    
    pic_berita: {
        type: Sequelize.STRING
    }
})

module.exports = Berita
