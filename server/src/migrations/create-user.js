'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            fullName: {
                type: Sequelize.STRING,
            },
            userName: {
                type: Sequelize.STRING,
                unique: true,
            },
            email: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
            association: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            avatar: {
                type: Sequelize.STRING,
            },
            isVertified: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            roleCode: {
                type: Sequelize.STRING,
                defaultValue: 'R3',
                references: {
                    model: 'Roles',
                    key: 'code',
                },
            },
            createdAt: {
                allowNull: false,
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: {
                allowNull: false,
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    },
};