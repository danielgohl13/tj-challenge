module.exports = (sequelize, Sequelize, Pessoa) => {
    const PessoaFis = sequelize.define("pessoafis", {
        id_pessoa: {
            type: Pessoa.id
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