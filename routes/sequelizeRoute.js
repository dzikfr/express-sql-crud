//route sequelize
import express from 'express';
import { 
    createProductSequelize, 
    getAllProductsSequelize,
    getProductByIdSequelize, 
    updateProductSequelize, 
    deleteProductSequelize
} from '../controllers/sequelizeController.js';

const sequelizeRouter = express.Router();

sequelizeRouter.get('/', getAllProductsSequelize);
sequelizeRouter.get('/:id', getProductByIdSequelize);
sequelizeRouter.post('/', createProductSequelize);
sequelizeRouter.put('/:id', updateProductSequelize);
sequelizeRouter.delete('/:id', deleteProductSequelize);

export default sequelizeRouter;
