var koneksi = require('../koneksi'); // Inisialisasi Koneksi di file sebelah hyungg
const Sequelize = require('sequelize'); // Load Library Sequelze

const Anggota = koneksi.define('anggota', 
    {
        nama: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        timestamps: true //AKTIF createdAt, updatedAt
    }
);
module.exports = Anggota;