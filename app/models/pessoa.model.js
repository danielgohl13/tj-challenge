module.exports = (sequelize, Sequelize, Endereco) => {
    const Pessoa = sequelize.define("pessoa", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: Sequelize.STRING
        },
        
        address_id: {
            type: Sequelize.INTEGER,
            reference: {
                model: 'endereco',
                key: 'id'
            }
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