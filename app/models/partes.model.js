module.exports = (sequelize, Sequelize, Defesa) => {
    const Partes = sequelize.define("partes", {
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
        
        defesa_id: {
            type: Sequelize.INTEGER,
            reference: {
                model: 'defesa',
                key: 'id'
            }
        },

        id_pessoa_reu: {
            type: Sequelize.INTEGER,
            reference: {
                model: 'pessoa',
                key: 'id'
            }    
        },

        defesa_reu_id: {
            type: Sequelize.INTEGER,
            reference: {
                model: 'defesa',
                key: 'id'
            }
        }
    });

    return Partes;
};