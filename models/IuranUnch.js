var koneksi = require('../koneksi'); // Inisialisasi Koneksi di file sebelah hyungg
const Sequelize = require('sequelize'); // Load Library Sequelze

const Iuran = koneksi.define('iuran', //nama model mahasiswa maka tabelnya: mahasiswas
    {
        
        tanggal: {
            type: Sequelize.STRING,
            allowNull: false
        },
        id_anggota: {
            type: Sequelize.STRING,
            allowNull: false
        },
        jumlah: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        timestamps: true //AKTIF createdAt, updatedAt
    }
);
module.exports = Iuran;