//config native mysql
import mysql from "mysql2";

const nativeDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mern_sql_native',
});

nativeDb.connect((err) => {
    if (!err) {
        console.log('Terkoneksi database MYSQL Native');
        return;
    }
    console.log('Gagal terkoneksi ke database native');
});

export default nativeDb;