import { Sequelize } from 'sequelize';

const sequelizeDb = new Sequelize('mern_sql_sequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

sequelizeDb.authenticate()
    .then(()=>{
        console.log('Terkoneksi database MYSQL Sequelize');
    })
    .catch(() => {
        console.error('Gagal terkoneksi ke database Sequelize');
    });

export default sequelizeDb;