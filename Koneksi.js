const Sequelize = require('sequelize');
/**
 * Henna Lup Lup
 * Inisialisasi Sequelize / MariaDB Database 
 * @henna_unch
 */


 /**
  * Inisialisasi Database Konek Eaaa
  * Unch Unch
  * HOST = IP/Hostname Database
  * PORT = OPEN PORT DATABASE
  * DIALECT = TIPE DATABASE 
  * 
  */


    const koneksi = new Sequelize('henna', 'root', '', {
        host: 'localhost',
        port: '3306',
        dialect: 'mariadb',
        dialectOptions:{
        useUTC:false,
        timezone: "Etc/GMT+7"
        }
    });

/**
 * Mager Ngetik Padakne Pak Sopingi Ae Eaaaaa
 * Happy Land 1 
 * 
 */

    koneksi.authenticate().then(() => {
    
        console.log('Berhasil Konek');
    
    }).catch(err => {
        
        console.error('Gagal Konek:', err.message);
    
    });

module.exports=koneksi;