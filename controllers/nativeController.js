//controller native
import ProductNative from '../models/nativeModel.js';

//create
export const createProductNative = (req, res) => {
    const newProduct = req.body;
    ProductNative.create(newProduct, (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, ...newProduct });
    });
};

//get all
export const getAllProductsNative = (req, res) => {
    ProductNative.getAll((err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

//get by id
export const getProductByIdNative = (req, res) => {
    ProductNative.getById(req.params.id, (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
};

//update
export const updateProductNative = (req, res) => {
    const updatedProduct = req.body;
    ProductNative.update(req.params.id, updatedProduct, (err, results) => {
        if (err) throw err;
        res.json({ id: req.params.id, ...updatedProduct });
    });
};

//delete
export const deleteProductNative = (req, res) => {
    ProductNative.delete(req.params.id, (err, results) => {
        if (err) throw err;
        res.json({ message: 'Produk dihapus' });
    });
};