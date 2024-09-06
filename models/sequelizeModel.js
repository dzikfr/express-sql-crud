//model sequelize
import { DataTypes } from 'sequelize';
import sequelizeDb from '../database/sequelizeDb.js';

const ProductSequelize = sequelizeDb.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false,
});

export default ProductSequelize;
