module.exports = (sequelize, Sequelize, Pessoa) => {
    const Defesa = sequelize.define("defesa", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        id_pessoa: {
            type: Sequelize.INTEGER,
            reference: {
                model: 'pessoa',
                key: 'id'
            }
        },
        
        cod_oab: {
            type: Sequelize.INTEGER
        }
    });

    return Defesa;
};