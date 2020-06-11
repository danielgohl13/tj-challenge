module.exports = (sequelize, Sequelize, Endereco) => {
    const Pessoa = sequelize.define("pessoa", {
        id: {
            type: Sequelize.INTEGER
        },

        nome: {
            type: Sequelize.STRING
        },
        
        address_id: {
            type: Endereco.id
        },

        tipo: {
            type: Sequelize.STRING
        },

        data_nascimento: {
            type: Sequelize.DATE
        },

        cod: {
            type: Sequelize.INTEGER
        }
    });

    return Pessoa;
};