module.exports = (sequelize, Sequelize, Pessoa) => {
    const Juiz = sequelize.define("juiz", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        vara_id: {
            type: Sequelize.INTEGER,
            reference: {
                model: 'vara',
                key: 'id'
            }
        },
        
        id_pessoa: {
            type: Pessoa.INTEGER,
            reference: {
                model: 'pessoa',
                key: 'id'
            }
        }
    });

    return Juiz;
};