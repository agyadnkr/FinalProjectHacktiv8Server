"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BoughtHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BoughtHistory.belongsTo(models.Buyer, { foreignKey: "BuyerId" });
    }
  }
  BoughtHistory.init(
    {
      carName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Car name is required",
          },
          notEmpty: {
            msg: "Car name is required",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Description is required",
          },
          notEmpty: {
            msg: "Description is required",
          },
        },
      },
      boughtDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Bought date is required",
          },
          notEmpty: {
            msg: "Bought date is required",
          },
        },
      },
      paidOff: DataTypes.BOOLEAN,
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Price is required",
          },
          notEmpty: {
            msg: "Price is required",
          },
        },
      },
      BuyerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Buyer id is required",
          },
          notEmpty: {
            msg: "Buyer id is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "BoughtHistory",
    }
  );
  return BoughtHistory;
};
