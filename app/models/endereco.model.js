module.exports = (sequelize, Sequelize) => {
    const Endereco = sequelize.define("endereco", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        logradouro: {
            type: Sequelize.STRING
        },
        
        numero: {
            type: Sequelize.INTEGER
        },

        bairro: {
            type: Sequelize.STRING
        },

        cep: {
            type: Sequelize.DATE
        },

        cidade: {
            type: Sequelize.INTEGER
        },
        
        estado: {
            type: Sequelize.INTEGER
        },

        complemento: {
            type: Sequelize.INTEGER
        }
    });

    return Endereco;
};