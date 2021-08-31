const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./Product');
const Tag = require('./Tag');

class ProductTag extends Model { }

ProductTag.init(
  {
    // define columns 

    product_id: {
      type: DataTypes.INTEGER,

      references: {
        // This is a reference to another Product
        model: Product,

        // This is the column name of the referenced model
        key: 'id'
      }
    }, tag_id: {
      type: DataTypes.INTEGER,

      references: {
        // This is a reference to another model
        model: Tag,

        // This is the column name of the referenced model
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
