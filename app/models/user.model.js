module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        login: {
            type: Sequelize.STRING
        },
        
        senha: {
            type: Sequelize.STRING
        },

        permissao: {
            type: Sequelize.STRING
        }
    });

    return User;
};