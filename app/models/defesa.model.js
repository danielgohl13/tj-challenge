module.exports = (sequelize, Sequelize, Pessoa) => {
    const Defesa = sequelize.define("defesa", {
        id: {
            type: Sequelize.INTEGER
        },

        id_pessoa: {
            type: Pessoa.id
        },
        
        cod_oab: {
            type: Sequelize.INTEGER
        }
    });

    return Defesa;
};