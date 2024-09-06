//controller sequelize
import ProductSequelize from "../models/sequelizeModel.js";

//create
export const createProductSequelize = async (req, res) => {
    try {
        const { name, price, stock } = req.body;
        const newProduct = await ProductSequelize.create({ name, price, stock });
        res.json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error', error });
    }
};

//get all
export const getAllProductsSequelize = async (req, res) => {
    try {
        const products = await ProductSequelize.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error', error });
    }
};

//get by id
export const getProductByIdSequelize = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductSequelize.findByPk(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Produk tidak ditemukan' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error', error });
    }
};

//update
export const updateProductSequelize = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, stock } = req.body;
        const updatedProduct = await ProductSequelize.update({ name, price, stock }, { where: { id } });
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error', error });
    }
};

//delete
export const deleteProductSequelize = async (req, res) => {
    try {
        const { id } = req.params;
        await ProductSequelize.destroy({ where: { id } });
        res.json({ message: 'Produk dihapus' });
    } catch (error) {
        res.status(500).json({ message: 'Error', error });
    }
};
