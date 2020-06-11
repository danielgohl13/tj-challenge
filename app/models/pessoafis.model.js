module.exports = (sequelize, Sequelize, Pessoa) => {
    const PessoaFis = sequelize.define("pessoafis", {
        id_pessoa: {
            type: Sequelize.INTEGER,
            reference: {
                model: 'pessoa',
                key: 'id'
            }
        },

        rg: {
            type: Sequelize.STRING
        },
        
        estado_civil: {
            type: Sequelize.STRING
        },

        nacionalidade: {
            type: Sequelize.STRING
        }
    });

    return PessoaFis;
};