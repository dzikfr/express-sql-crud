//model native
import nativeDb from '../database/nativeDb.js';
const ProductNative = {};

ProductNative.getAll = (callback) => {
    const sql = 'SELECT * FROM products';
    nativeDb.query(sql, callback);
};

ProductNative.getById = (id, callback) => {
    const sql = 'SELECT * FROM products WHERE id = ?';
    nativeDb.query(sql, [id], callback);
};

ProductNative.create = (newProduct, callback) => {
    const sql = 'INSERT INTO products SET ?';
    nativeDb.query(sql, newProduct, callback);
};

ProductNative.update = (id, updatedProduct, callback) => {
    const sql = 'UPDATE products SET ? WHERE id = ?';
    nativeDb.query(sql, [updatedProduct, id], callback);
};

ProductNative.delete = (id, callback) => {
    const sql = 'DELETE FROM products WHERE id = ?';
    nativeDb.query(sql, [id], callback);
};

export default ProductNative;