// route native
import { Router } from 'express';
import {
    getAllProductsNative,
    getProductByIdNative,
    createProductNative,
    updateProductNative,
    deleteProductNative,
} from '../controllers/nativeController.js';

const nativeRouter = Router();

nativeRouter.get('/', getAllProductsNative);
nativeRouter.get('/:id', getProductByIdNative);
nativeRouter.post('/', createProductNative);
nativeRouter.put('/:id', updateProductNative);
nativeRouter.delete('/:id', deleteProductNative);

export default nativeRouter;