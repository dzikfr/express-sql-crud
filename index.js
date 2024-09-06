import express from 'express';
import nativeRouter from './routes/nativeRoute.js';
import sequelizeRouter from './routes/sequelizeRoute.js';
const PORT = 3000;
const app = express();

app.use(express.json());

app.use('/api/native', nativeRouter);
app.use('/api/sequelize', sequelizeRouter)

app.listen(PORT, () => {
    console.log(`Berjalan pada port http://localhost:${PORT}`);
});

//http
//database native: mern_sql_native
//database sequelize: mern_sql_sequelize
//table: products (id(autoincrement), name, price, stock)