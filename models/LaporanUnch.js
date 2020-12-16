var koneksi = require('../koneksi'); // Inisialisasi Koneksi di file sebelah hyungg
const Sequelize = require('sequelize'); // Load Library Sequelze

const Laporan = koneksi.define('laporan',
    {
        
        tipe: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tanggal: {
            type: Sequelize.STRING,
            allowNull: false
        },
        keterangan: {
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
module.exports = Laporan;