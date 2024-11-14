import { Sequelize } from 'sequelize';
import db from '../config/database.js';
import Users from './UserModel.js'; 

const { DataTypes } = Sequelize;

const Clients = db.define('clients', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isEmail: true
        }
    },
    evaluationDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    height: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    unwantedGain: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    pathologies: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    userId: { // Agregar el campo userId para la relación
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },

}, {
    freezeTableName: true
});

Users.hasMany(Clients, { foreignKey: 'userId' });
Clients.belongsTo(Users, { foreignKey: 'userId' });

export default Clients;
